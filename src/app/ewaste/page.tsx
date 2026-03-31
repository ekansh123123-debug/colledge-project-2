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
  PieChart,
  Pie,
  Cell
} from "recharts";
import { MonitorSmartphone, BatteryCharging, ArrowUpRight, Cpu } from "lucide-react";

// Mock data
const ewasteCategories = [
  { name: "Laptops/PCs", value: 120, color: "#3b82f6" },
  { name: "Smartphones", value: 250, color: "#8b5cf6" },
  { name: "Batteries", value: 400, color: "#f59e0b" },
  { name: "Cables/Misc", value: 150, color: "#10b981" },
];

const collectionTrends = [
  { month: "Jan", Collected: 45, Refurbished: 20 },
  { month: "Feb", Collected: 55, Refurbished: 25 },
  { month: "Mar", Collected: 40, Refurbished: 15 },
  { month: "Apr", Collected: 80, Refurbished: 45 }, // E-waste drive month
  { month: "May", Collected: 65, Refurbished: 30 },
  { month: "Jun", Collected: 50, Refurbished: 25 },
];

export default function EWasteManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          E-Waste Platform
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Track electronic waste collection, battery recycling, and device refurbishment.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {/* Stat Cards */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
              <MonitorSmartphone className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Total Devices Collected (YTD)
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                920
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
            <span className="font-medium text-emerald-500">+15%</span>
            <span className="ml-2 text-zinc-500 dark:text-zinc-400">vs last year</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
              <Cpu className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Refurbished & Donated
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                160
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium text-emerald-500">17.3% Refurbishment Rate</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-amber-100 text-amber-600 dark:bg-amber-900/30 dark:text-amber-400">
              <BatteryCharging className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Battery Bins Fullness
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                85%
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium text-amber-500">Pickup scheduled for Friday</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chart 1: Categories Pie */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            E-Waste by Category (Items)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={ewasteCategories}
                  cx="50%"
                  cy="50%"
                  innerRadius={0}
                  outerRadius={100}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {ewasteCategories.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "rgba(24, 24, 27, 0.9)",
                    border: "none",
                    borderRadius: "8px",
                    color: "#f4f4f5",
                  }}
                  itemStyle={{ color: "#f4f4f5" }}
                />
                <Legend />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Collection Trends */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Collection vs Refurbishment (Monthly)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={collectionTrends}>
                <CartesianGrid strokeDasharray="3 3" stroke="#52525b" opacity={0.2} vertical={false} />
                <XAxis
                  dataKey="month"
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
                <Bar dataKey="Collected" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
                <Bar dataKey="Refurbished" fill="#10b981" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
