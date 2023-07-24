import Link from "next/link";
import { BaseSquare } from "./baseSquare";

export function AddSquare() {
  return (
    <BaseSquare className="bg-white hover:bg-gray-100 cursor-pointe">
      <Link href="/add" className="text-5xl font-bold">
        {" "}
        +{" "}
      </Link>
    </BaseSquare>
  );
}
