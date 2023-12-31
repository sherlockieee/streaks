import { Button } from "@/components/ButtonUI";
import Checkbox from "@/components/checkbox";
import { InputBox } from "@/components/InputBox";
import prisma from "@/lib/prisma";
import { redirect } from "next/navigation";

async function createHabit(data: FormData) {
  const title = data.get("title")?.valueOf();
  if (typeof title !== "string" || title.length === 0) {
    throw new Error("Invalid Title");
  }

  const minimumTime = Number(data.get("minimumTime")?.valueOf());
  if (typeof minimumTime !== "number" || minimumTime < 1) {
    throw new Error("Invalid minimum time");
  }

  const requireEvidence = Boolean(data.get("requireEvidence")?.valueOf());
  const allowStreakFreeze = Boolean(data.get("allowStreakFreeze")?.valueOf());

  const newHabit = await prisma.habit.create({
    data: {
      title,
      minimumTime,
      requireEvidence,
      allowStreakFreeze,
    },
  });

  if (newHabit === null) {
    throw new Error("Failed to create habit");
  }

  const newHabitProgress = await prisma.habitProgress.create({
    data: {
      habitId: newHabit.id,
      createdAt: new Date(),
      status: "NOT_DONE_YET",
      completed: false,
      minutes: 0,
      currentStreakCount: 0,
    },
  });

  if (newHabitProgress === null) {
    throw new Error("Failed to create habit progress");
  }

  redirect("/");
}

export default function Add() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <form
        action={createHabit}
        className="w-full max-w-md bg-primary p-10  border-black border-solid border-4 rounded-2xl flex flex-col "
      >
        <input
          type="text"
          className="w-full text-xl bg-transparent font-serif font-bold border-b border-gray-500 border-solid placeholder:text-slate-500 placeholder:italic focus:outline-none mb-4"
          placeholder="Habit title..."
          name="title"
          required
        ></input>
        <div className="mb-2">
          <p className="font-bold">I want to do this:</p>
          <div className="flex items-center">
            <Checkbox defaultChecked required id="every-day" />
            <label htmlFor="every-day">Every day</label>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-bold">For a minimum of:</p>
          <div className="flex gap-3">
            <InputBox
              type="number"
              defaultValue={5}
              required
              min={1}
              id="minimumTime"
              name="minimumTime"
            />
            <span className="inline-block w-min">minutes</span>
          </div>
        </div>
        <div className="flex items-center">
          <Checkbox
            defaultChecked
            name="requireEvidence"
            id="require-evidence"
          />
          <label htmlFor="require-evidence">Require uploading evidence</label>
        </div>
        <div className="flex items-center mb-4">
          <Checkbox
            defaultChecked
            name="allowStreakFreeze"
            id="streak-freeze"
          />
          <label htmlFor="streak-freeze">Allow streak freezes</label>
        </div>

        <Button type="submit">Add new habit</Button>
      </form>
    </main>
  );
}
