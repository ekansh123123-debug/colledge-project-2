import { HeartHandshake } from "lucide-react";

export default function GreenHabits() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <HeartHandshake className="h-10 w-10 text-zinc-400 dark:text-zinc-500" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Green Habit Tracker / Sustainability Awareness App
      </h2>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400 max-w-md">
        This module is currently under development. Soon, you will be able to set personal goals, join campus challenges, and earn badges for sustainable actions.
      </p>
    </div>
  );
}
