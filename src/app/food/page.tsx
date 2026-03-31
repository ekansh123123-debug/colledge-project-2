"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart
} from "recharts";
import { Utensils, Sprout, ArrowDownRight, Apple } from "lucide-react";

// Mock data
const weeklyFoodWaste = [
  { day: "Mon", "Pre-Consumer": 45, "Post-Consumer": 120 },
  { day: "Tue", "Pre-Consumer": 40, "Post-Consumer": 110 },
  { day: "Wed", "Pre-Consumer": 50, "Post-Consumer": 130 },
  { day: "Thu", "Pre-Consumer": 35, "Post-Consumer": 95 },
  { day: "Fri", "Pre-Consumer": 60, "Post-Consumer": 150 },
  { day: "Sat", "Pre-Consumer": 30, "Post-Consumer": 80 },
  { day: "Sun", "Pre-Consumer": 25, "Post-Consumer": 75 },
];

const compostProduction = [
  { week: "Week 1", compost: 350 },
  { week: "Week 2", compost: 380 },
  { week: "Week 3", compost: 410 },
  { week: "Week 4", compost: 405 },
];

export default function FoodWaste() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Food Waste Reduction
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Monitor dining hall waste (pre and post-consumer) and track campus composting efforts.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Stat Cards */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
              <Utensils className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Weekly Food Waste
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                1,045 kg
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowDownRight className="mr-1 h-4 w-4 text-emerald-500" />
            <span className="font-medium text-emerald-500">-8%</span>
            <span className="ml-2 text-zinc-500 dark:text-zinc-400">vs last week</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <Sprout className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Compost Generated
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                405 kg
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium text-emerald-500">38% diversion rate</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-rose-100 text-rose-600 dark:bg-rose-900/30 dark:text-rose-400">
              <Apple className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Food Recovery Donations
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                120 Meals
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium text-zinc-500 dark:text-zinc-400">Donated to local shelters this week</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chart 1: Pre vs Post Consumer */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Dining Hall Waste (kg/day)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyFoodWaste}>
                <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.2} vertical={false} />
                <XAxis
                  dataKey="day"
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
                  cursor={{fill: 'rgba(255,255,255,0.05)'}}
                />
                <Legend />
                <Bar dataKey="Pre-Consumer" stackId="a" fill="#f59e0b" radius={[0, 0, 4, 4]} />
                <Bar dataKey="Post-Consumer" stackId="a" fill="#ef4444" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Compost Trends */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Monthly Compost Production (kg)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={compostProduction}>
                <defs>
                  <linearGradient id="colorCompost" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.2} vertical={false} />
                <XAxis
                  dataKey="week"
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
                  domain={[0, 500]}
                />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(24, 24, 27, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#f4f4f5",
                  }}
                />
                <Area type="monotone" dataKey="compost" stroke="#10b981" fillOpacity={1} fill="url(#colorCompost)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
