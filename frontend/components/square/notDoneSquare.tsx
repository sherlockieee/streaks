"use client";
import Image from "next/image";
import sadSunIcon from "@/public/icons/happy-sun.svg";
import { TodayHabit } from "@/actions/getTodayHabit";
import { useState } from "react";
import { CheckIcon } from "@radix-ui/react-icons";
import { BaseSquare } from "./baseSquare";
import * as Dialog from "@radix-ui/react-dialog";
import { LogProgressDialog } from "../LogProgressDialog";

export default function NotDoneSquare({ habit }: { habit: TodayHabit }) {
  const [isHovering, setIsHovered] = useState(false);
  const onMouseEnter = () => setIsHovered(true);
  const onMouseLeave = () => setIsHovered(false);

  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <BaseSquare
          className={"bg-white hover:bg-gray-100 w-100"}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {isHovering ? (
            <>
              <CheckIcon width={72} height={72} />
              <p>Log progress</p>
            </>
          ) : (
            <>
              <p className="font-bold text-lg">
                🔥 {habit.habitProgress.currentStreakCount}{" "}
              </p>
              <Image src={sadSunIcon} alt={"sad sun icon"} width={72} />
              <p className="line-clamp-1">{habit.title}</p>
            </>
          )}{" "}
        </BaseSquare>
      </Dialog.Trigger>
      <LogProgressDialog habit={habit} />
    </Dialog.Root>
  );
}
