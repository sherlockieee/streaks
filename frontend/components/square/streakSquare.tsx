"use client";
import { TodayHabit } from "../../app/page";
import DoneSquare from "./doneSquare";
import NotDoneSquare from "./notDoneSquare";

export function StreakSquare({ habit }: { habit: TodayHabit }) {
  return habit.habitProgress.status === "NOT_DONE_YET" ? (
    <NotDoneSquare habit={habit} />
  ) : (
    <DoneSquare habit={habit} />
  );
}
