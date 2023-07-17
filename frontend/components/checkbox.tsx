"use client";

import * as RadixCheckbox from "@radix-ui/react-checkbox";
import { CheckIcon } from "@radix-ui/react-icons";

interface CheckboxProps extends RadixCheckbox.CheckboxProps {
  id: string;
}

export default function Checkbox({ id, ...rest }: CheckboxProps) {
  return (
    <RadixCheckbox.Root
      className="appearance-none bg-white rounded-sm flex items-center content-center mr-2 w-4 h-4"
      id={id}
      {...rest}
    >
      <RadixCheckbox.Indicator className="text-black">
        <CheckIcon />
      </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  );
}
