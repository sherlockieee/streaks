import Image from "next/image";
import sadSunIcon from "../../../public/icons/sad-sun.svg";
import happySunIcon from "../../../public/icons/happy-sun.svg";
import { TodayHabit } from "../page";

export function SquareStreak({ habit }: { habit: TodayHabit }) {
  return (
    <div
      className={`flex rounded-2xl border-black border-4 flex-col justify-center items-center p-4 ${
        habit.habitProgress.status === "SUCCESS"
          ? `bg-success`
          : habit.habitProgress.status === "FAIL_FREEZE"
          ? "bg-failure"
          : "bg-white"
      } gap-2 aspect-square h-40`}
    >
      <p className="font-bold text-lg">
        🔥 {habit.habitProgress.currentStreakCount}{" "}
      </p>
      <Image
        src={
          habit.habitProgress.status === "SUCCESS" ? happySunIcon : sadSunIcon
        }
        alt={
          habit.habitProgress.status === "SUCCESS"
            ? "happy sun icon"
            : "sad sun icon"
        }
        width={72}
      />
      <p>{habit.title}</p>
    </div>
  );
}
