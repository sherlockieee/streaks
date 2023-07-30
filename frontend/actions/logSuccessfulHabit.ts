"use server";

import { TodayHabit } from "@/actions/getTodayHabit";
import { HabitProgressStatus } from "@prisma/client";
import prisma from "@/lib/prisma";
import { Dispatch, SetStateAction } from "react";
import { redirect } from "next/navigation";

export async function submitForm(
  data: FormData,
  habit: TodayHabit,
  setError: Dispatch<SetStateAction<string>>
) {
  console.log(data);

  const minutes = Number(data.get("minutes")?.valueOf());
  if (Number.isNaN(minutes) || minutes < 0) {
    setError("Invalid minutes");
  }
  if (minutes < habit.minimumTime) {
    setError(
      `You did not complete the habit for at least ${habit.minimumTime} minutes`
    );
  }
  const requireEvidence = Boolean(data.get("requireEvidence")?.valueOf());
  if (requireEvidence && !data.get("evidence")) {
    setError("Evidence required");
  }

  try {
    await prisma.habitProgress.create({
      data: {
        habitId: habit.id,
        createdAt: new Date(),
        status: HabitProgressStatus.SUCCESS,
        completed: true,
        lastCompletedAt: new Date(),
        minutes,
        currentStreakCount: habit.habitProgress.currentStreakCount + 1,
      },
    });
    redirect("/");
  } catch (e: any) {
    setError(e.message);
  }
}
