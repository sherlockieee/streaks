"use client";

import { useState, useEffect } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Add() {
  const [title, setTitle] = useState("");
  const [minimumTime, setMinimumTime] = useState(5);
  const [evidenceRequired, setEvidenceRequired] = useState(true);
  const [streakFreeze, setStreakFreeze] = useState(true);

  function handleSubmit(e) {
    e.preventDefault();
    console.log({ title, minimumTime, evidenceRequired, streakFreeze });
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md bg-primary p-10  border-black border-solid border-4 rounded-2xl flex flex-col "
      >
        <input
          type="text"
          className="w-full text-xl bg-transparent font-serif font-bold border-b border-gray-500 border-solid placeholder:text-slate-500 placeholder:italic focus:outline-none mb-4"
          placeholder="Habit title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        ></input>
        <div className="mb-2">
          <p className="font-bold">I want to do this:</p>
          <div className="flex items-center ">
            <Checkbox.Root
              className="appearance-none bg-white rounded-sm flex items-center content-center mr-2 w-4 h-4"
              defaultChecked
              required
              id="every-day"
            >
              <Checkbox.Indicator className="text-black">
                <CheckIcon />
              </Checkbox.Indicator>
            </Checkbox.Root>
            <label htmlFor="every-day">Every day</label>
          </div>
        </div>
        <div className="mb-4">
          <p className="font-bold">For a minimum of:</p>
          <input
            type="number"
            min={1}
            required
            onChange={(e) => {
              setMinimumTime(parseInt(e.target.value));
            }}
            value={minimumTime}
            className="mr-2 w-12 bg-transparent border-b border-gray-500 border-solid placeholder:text-slate-500 placeholder:italic focus:outline-none"
          ></input>
          <label htmlFor="minutes">minutes</label>
        </div>
        <div className="flex items-center ">
          <Checkbox.Root
            className="appearance-none bg-white rounded-sm flex items-center content-center mr-2 w-4 h-4"
            defaultChecked
            value={evidenceRequired}
            id="evidence"
            onClick={() => setEvidenceRequired(!evidenceRequired)}
          >
            <Checkbox.Indicator className="text-black">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="evidence">Require uploading evidence</label>
        </div>
        <div className="flex items-center mb-8 ">
          <Checkbox.Root
            className="appearance-none bg-white rounded-sm flex items-center content-center mr-2 w-4 h-4"
            defaultChecked
            id="streak-freeze"
            value={streakFreeze}
            onClick={() => setStreakFreeze(!streakFreeze)}
          >
            <Checkbox.Indicator className="text-black">
              <CheckIcon />
            </Checkbox.Indicator>
          </Checkbox.Root>
          <label htmlFor="streak-freeze">Allow streak freezes</label>
        </div>
        <button
          type="submit"
          className="border-4 border-black border-solid rounded-md font-serif uppercase font-bold bg-white px-4 py-2 hover:bg-gray-100"
        >
          Add new habit
        </button>
      </form>
    </main>
  );
}
