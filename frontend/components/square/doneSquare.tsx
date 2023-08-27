import React from "react";
import { BaseSquare } from "./baseSquare";
import { TodayHabit } from "@/app/page";
import happySunIcon from "@/public/icons/happy-sun.svg";
import Image from "next/image";

export default function DoneSquare({ habit }: { habit: TodayHabit }) {
  return (
    <BaseSquare className="bg-success">
      <p className="font-bold text-lg">
        🔥 {habit.habitProgress.currentStreakCount}{" "}
      </p>
      <Image src={happySunIcon} alt={"happy sun icon"} width={72} />
      <p className="truncate">{habit.title}</p>
    </BaseSquare>
  );
}
