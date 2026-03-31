import { CarFront } from "lucide-react";

export default function EcoTransport() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <CarFront className="h-10 w-10 text-zinc-400 dark:text-zinc-500" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Carpooling or Eco-friendly Transportation App
      </h2>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400 max-w-md">
        This module is currently under development. Soon, you will be able to organize carpools, check EV charging station availability, and view real-time shuttle schedules.
      </p>
    </div>
  );
}
