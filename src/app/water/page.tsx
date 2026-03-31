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
  Area,
  AreaChart,
} from "recharts";
import { Droplets, ArrowDownRight, AlertTriangle, ShieldCheck } from "lucide-react";

// Mock data
const dailyWaterUsage = [
  { time: "00:00", usage: 120 },
  { time: "04:00", usage: 90 },
  { time: "08:00", usage: 450 },
  { time: "12:00", usage: 600 },
  { time: "16:00", usage: 520 },
  { time: "20:00", usage: 300 },
  { time: "23:59", usage: 150 },
];

const buildingWaterUsage = [
  { name: "Science Bldg", usage: 4200, lastWeek: 4500 },
  { name: "Dorm A", usage: 3800, lastWeek: 3700 },
  { name: "Library", usage: 1500, lastWeek: 1600 },
  { name: "Gym", usage: 2800, lastWeek: 2900 },
  { name: "Dining Hall", usage: 5100, lastWeek: 5300 },
];

export default function WaterConservation() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Water Conservation Tracker
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Monitor daily water usage across campus, track conservation goals, and detect potential leaks.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Stat Cards */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Droplets className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Total Daily Usage
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                17,400 L
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowDownRight className="mr-1 h-4 w-4 text-emerald-500" />
            <span className="font-medium text-emerald-500">-4.2%</span>
            <span className="ml-2 text-zinc-500 dark:text-zinc-400">vs yesterday</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Conservation Goal
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                92%
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium text-zinc-500 dark:text-zinc-400">Target: Under 18,000 L / day</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <AlertTriangle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Active Leak Alerts
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                1
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium text-amber-500">Dorm A - 2nd Floor Restroom</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chart 1: Daily Area Chart */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Real-Time Water Usage (L/hr)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={dailyWaterUsage}>
                <defs>
                  <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                  </linearGradient>
                </defs>
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
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(24, 24, 27, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#f4f4f5",
                  }}
                />
                <Area type="monotone" dataKey="usage" stroke="#3b82f6" fillOpacity={1} fill="url(#colorUsage)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Building Usage Comparison */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Usage by Building (Weekly Average)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={buildingWaterUsage}>
                <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.2} vertical={false} />
                <XAxis
                  dataKey="name"
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
                  tickFormatter={(value) => `${value / 1000}kL`}
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
                <Line type="monotone" dataKey="usage" name="This Week" stroke="#3b82f6" strokeWidth={2} activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="lastWeek" name="Last Week" stroke="#71717a" strokeWidth={2} strokeDasharray="5 5" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
