import Image from "next/image";
import sadSunIcon from "../../public/icons/sad-sun.svg";
import happySunIcon from "../../public/icons/happy-sun.svg";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full max-w-lg bg-primary p-10  border-black border-solid border-4 rounded-2xl flex flex-col gap-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="underline text-xl">Your streaks</h2>
          <button className="border-2 border-black border-solid rounded-md font-serif uppercase font-bold bg-white px-4 py-2 ">
            Share
          </button>
        </div>
        <div className="flex flex-row flex-wrap items-stretch justify-between gap-4">
          <div className="flex rounded-2xl border-black border-4 flex-col justify-center items-center p-4 bg-success gap-2 aspect-square h-40">
            <p className="font-bold text-lg">🔥 231</p>
            <Image src={happySunIcon} alt="sad sun icon" width={72} />
            <p>Wake up early</p>
          </div>
          <div className="flex rounded-2xl border-black border-4 flex-col justify-center items-center p-4 bg-success gap-2 aspect-square h-40">
            <p className="font-bold text-lg">🔥 231</p>
            <Image src={happySunIcon} alt="sad sun icon" width={72} />
            <p>Wake up early</p>
          </div>
          <div className="flex rounded-2xl border-black border-4 flex-col justify-center items-center p-4 bg-success gap-2 aspect-square h-40">
            <p className="font-bold text-lg">🔥 231</p>
            <Image src={happySunIcon} alt="sad sun icon" width={72} />
            <p>Wake up early</p>
          </div>
          <div className="flex rounded-2xl border-black border-4 flex-col justify-center items-center p-4 bg-success gap-2 aspect-square h-40">
            <p className="font-bold text-lg">🔥 231</p>
            <Image src={happySunIcon} alt="sad sun icon" width={72} />
            <p>Wake up early</p>
          </div>
        </div>
        <div>
          <h2 className="underline text-xl">Friends</h2>
          <div>
            <div></div>
            <a>Ha</a>
          </div>
        </div>
      </div>
    </main>
  );
}
