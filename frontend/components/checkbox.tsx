"use client";
import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

export default function Checkbox() {
  return (
    <div className="flex items-center ">
      <RadixCheckbox.Root
        className="appearance-none bg-white rounded-sm flex items-center content-center mr-2 w-4 h-4"
        defaultChecked
        required
        id="every-day"
      >
        <RadixCheckbox.Indicator className="text-black">
          <CheckIcon />
        </RadixCheckbox.Indicator>
      </RadixCheckbox.Root>
      <label htmlFor="every-day">Every day</label>
    </div>
  );
}
