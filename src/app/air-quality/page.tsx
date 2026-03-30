import { Wind } from "lucide-react";

export default function AirQuality() {
  return (
    <div className="flex h-[80vh] flex-col items-center justify-center text-center">
      <div className="mb-4 flex h-20 w-20 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-800">
        <Wind className="h-10 w-10 text-zinc-400 dark:text-zinc-500" />
      </div>
      <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
        Air Quality Monitoring Application
      </h2>
      <p className="mt-2 text-zinc-500 dark:text-zinc-400 max-w-md">
        This module is currently under development. Soon, you will be able to view real-time AQI data, historical trends, and indoor vs outdoor air quality comparisons.
      </p>
    </div>
  );
}
