import Link from "next/link";

export function AddSquare() {
  return (
    <Link
      href="/add"
      className="flex flex-col rounded-2xl border-black border-4  justify-center items-center p-4 bg-white gap-2 aspect-square h-40 text-5xl font-bold cursor-pointer hover:bg-gray-100 bouncing-animation"
    >
      {" "}
      +{" "}
    </Link>
  );
}
