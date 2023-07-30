import prisma from "../lib/prisma";
import { Prisma } from "@prisma/client";

export async function getTodayHabits() {
  const res = await prisma.habit.findMany({
    include: {
      habitProgress: {
        orderBy: {
          createdAt: "desc",
        },
        take: 1,
      },
    },
  });
  // remove the array from habitProgress
  const flattenedRes = res.map((habit) => {
    return { ...habit, habitProgress: habit.habitProgress[0] };
  });
  console.log(flattenedRes);
  return flattenedRes;
}

export type TodayHabits = Prisma.PromiseReturnType<typeof getTodayHabits>;
export type TodayHabit = TodayHabits[number];
