import { StreakSquare } from "../components/square/streakSquare";
import { AddSquare } from "../components/square/addSquare";
import { Button } from "@/components/ButtonUI";
import { TodayHabits, getTodayHabits } from "@/actions/getTodayHabit";

const MAX_HABITS = 6;

export default async function Home() {
  const habitData: TodayHabits = await getTodayHabits();
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-8">
      <div className="w-full max-w-md bg-primary p-10  border-black border-solid border-4 rounded-2xl flex flex-col gap-8">
        <div className="flex flex-row justify-between items-center">
          <h2 className="underline text-xl">Your streaks</h2>
          <Button>Share</Button>
        </div>
        <div className="flex flex-row flex-wrap items-stretch justify-between gap-4">
          {habitData.map((habit) => (
            <StreakSquare key={habit.id} habit={habit} />
          ))}
          {habitData.length < MAX_HABITS &&
            Array(MAX_HABITS - habitData.length)
              .fill(0)
              .map((_, index) => <AddSquare key={index} />)}
        </div>
        <div>
          <h2 className="underline text-xl">Friends</h2>
          <div>
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
    </main>
  );
}
