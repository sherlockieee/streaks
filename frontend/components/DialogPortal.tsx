"use client";
import { useState } from "react";
import { Cross2Icon } from "@radix-ui/react-icons";
import * as Dialog from "@radix-ui/react-dialog";

import { TodayHabit } from "@/actions/getTodayHabit";

import { InputBox } from "./InputBox";
import { Button } from "./ButtonUI";
import { submitForm } from "@/actions/logSuccessfulHabit";

export function DialogPortal({ habit }: { habit: TodayHabit }) {
  const [error, setError] = useState("");

  return (
    <>
      <Dialog.Overlay className="bg-black bg-opacity-50 data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-lg bg-primary p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none border-4 border-black border-solid">
        <Dialog.Title className=" m-0 text-[17px]">
          Log your progress
        </Dialog.Title>
        <Dialog.Description className="mt-5 mb-2 leading-normal">
          Today I <span className="font-bold">{habit.title}</span> for:
        </Dialog.Description>
        <form action={(data) => submitForm(data, habit, setError)}>
          <fieldset className="mb-[15px] flex items-center gap-5">
            <InputBox
              name="minutes"
              id="minutes"
              type="number"
              min={1}
              required
              defaultValue={Math.min(habit.minimumTime, 5)}
            />
            <label htmlFor="minutes">minutes</label>
          </fieldset>

          <fieldset className="mb-2">
            <label
              className=" w-[90px] text-right text-[15px]"
              htmlFor="username"
            >
              Upload evidence:
            </label>
            <input
              type="file"
              accept="png, jpg, jpeg"
              required={habit.requireEvidence}
              name="evidence"
              id="evidence"
            />
          </fieldset>
          {error && <p className="text-failure">{error}</p>}
          <div className="mt-8 flex justify-center">
            <Button type="submit">Log progress</Button>
          </div>
        </form>
        <Dialog.Close asChild>
          <button
            className="hover:bg-blend-darken absolute top-[10px] right-[10px] inline-flex h-[40px] w-[40px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </>
  );
}
