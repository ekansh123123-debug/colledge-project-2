"use client";

import {
  Line,
  LineChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { Wind, Activity, MapPin, AlertCircle } from "lucide-react";

// Mock data
const hourlyAQI = [
  { time: "08:00", "Main Plaza": 42, "Science Lab": 38, "Dorm A": 45 },
  { time: "10:00", "Main Plaza": 55, "Science Lab": 40, "Dorm A": 48 },
  { time: "12:00", "Main Plaza": 68, "Science Lab": 45, "Dorm A": 52 },
  { time: "14:00", "Main Plaza": 75, "Science Lab": 48, "Dorm A": 55 },
  { time: "16:00", "Main Plaza": 82, "Science Lab": 50, "Dorm A": 58 },
  { time: "18:00", "Main Plaza": 65, "Science Lab": 44, "Dorm A": 50 },
  { time: "20:00", "Main Plaza": 48, "Science Lab": 39, "Dorm A": 45 },
];

export default function AirQuality() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Air Quality Monitoring
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Real-time tracking of Air Quality Index (AQI), PM2.5, and CO2 levels across campus.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat Cards */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <Wind className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Average Campus AQI
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                48
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="inline-flex items-center rounded-full bg-emerald-50 px-2 py-1 text-xs font-medium text-emerald-700 ring-1 ring-inset ring-emerald-600/20 dark:bg-emerald-400/10 dark:text-emerald-400 dark:ring-emerald-400/20">
              Good
            </span>
            <span className="ml-2 text-zinc-500 dark:text-zinc-400">No health impacts</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Activity className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                PM2.5 Level
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                12.4 µg/m³
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium text-zinc-500 dark:text-zinc-400">WHO target: &lt;15 µg/m³</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <MapPin className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Highest AQI Area
              </p>
              <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-50">
                Main Plaza (82)
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-1 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20 dark:bg-amber-400/10 dark:text-amber-400 dark:ring-amber-400/20">
              Moderate
            </span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
              <AlertCircle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Indoor CO2 Alerts
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                2
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium text-red-500">Lecture Hall B, Library 3F</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-1">
        {/* Chart: AQI Trends */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Air Quality Index (AQI) Trends by Zone - Today
          </h3>
          <div className="h-[400px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyAQI}>
                <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.2} vertical={false} />
                <XAxis
                  dataKey="time"
                  stroke="#71717a"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                />
                <YAxis
                  stroke="#71717a"
                  fontSize={12}
                  tickLine={false}
                  axisLine={false}
                  domain={[0, 100]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(24, 24, 27, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#f4f4f5",
                  }}
                />
                <Legend />
                <Line type="monotone" dataKey="Main Plaza" stroke="#f59e0b" strokeWidth={3} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="Science Lab" stroke="#10b981" strokeWidth={3} />
                <Line type="monotone" dataKey="Dorm A" stroke="#3b82f6" strokeWidth={3} />
                {/* Reference line for moderate AQI threshold */}
                <Line type="monotone" dataKey={() => 50} stroke="#ef4444" strokeWidth={1} strokeDasharray="3 3" dot={false} name="Good / Moderate Boundary" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
