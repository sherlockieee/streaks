import { HabitProgressStatus } from "@prisma/client";
import prisma from "@/lib/prisma";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const data = await req.json();

  const { habitId, status, minutes } = data;

  const mostRecentHabitProgress = await prisma.habitProgress.findFirst({
    where: {
      habitId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  try {
    if (status === HabitProgressStatus.SUCCESS) {
      const newHabitProgress = await prisma.habitProgress.create({
        data: {
          habitId,
          createdAt: new Date(),
          status: status,
          completed: true,
          lastCompletedAt: new Date(),
          minutes,
          currentStreakCount: mostRecentHabitProgress
            ? mostRecentHabitProgress.currentStreakCount + 1
            : 1,
        },
      });

      console.log(JSON.stringify(newHabitProgress));
      return new NextResponse(JSON.stringify(newHabitProgress), {
        status: 200,
      });
    }
  } catch (e: any) {
    return new NextResponse(e.message, { status: 500 });
  }
}
