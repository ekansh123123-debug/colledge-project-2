"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Cell,
} from "recharts";
import { Trash2, Recycle, ArrowUpRight, ArrowDownRight, Droplets } from "lucide-react";

// Mock data
const wasteByMaterial = [
  { name: "Landfill", value: 400, color: "#ef4444" },
  { name: "Recycling", value: 300, color: "#3b82f6" },
  { name: "Compost", value: 300, color: "#22c55e" },
];

const weeklyWasteTrends = [
  { name: "Mon", Landfill: 120, Recycling: 80, Compost: 45 },
  { name: "Tue", Landfill: 110, Recycling: 90, Compost: 50 },
  { name: "Wed", Landfill: 130, Recycling: 85, Compost: 48 },
  { name: "Thu", Landfill: 105, Recycling: 95, Compost: 52 },
  { name: "Fri", Landfill: 140, Recycling: 100, Compost: 60 },
  { name: "Sat", Landfill: 60, Recycling: 40, Compost: 20 },
  { name: "Sun", Landfill: 55, Recycling: 35, Compost: 18 },
];

export default function WasteManagement() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          Smart Waste Management
        </h1>
        <p className="text-zinc-500 dark:text-zinc-400">
          Monitor campus bin fill levels, recycling rates, and optimize collection.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {/* Stat Cards */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
              <Recycle className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Diversion Rate
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                60%
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
            <span className="font-medium text-emerald-500">5%</span>
            <span className="ml-2 text-zinc-500 dark:text-zinc-400">vs last month</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400">
              <Trash2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Landfill Waste
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                720 kg
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowDownRight className="mr-1 h-4 w-4 text-emerald-500" />
            <span className="font-medium text-emerald-500">-12%</span>
            <span className="ml-2 text-zinc-500 dark:text-zinc-400">vs last week</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
              <Droplets className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Compost Collected
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                293 kg
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <ArrowUpRight className="mr-1 h-4 w-4 text-emerald-500" />
            <span className="font-medium text-emerald-500">+8%</span>
            <span className="ml-2 text-zinc-500 dark:text-zinc-400">vs last week</span>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400">
              <Trash2 className="h-6 w-6" />
            </div>
            <div>
              <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
                Full Bins (Campus)
              </p>
              <h3 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
                14 / 85
              </h3>
            </div>
          </div>
          <div className="mt-4 flex items-center text-sm">
            <span className="font-medium text-amber-500">Requires collection</span>
          </div>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        {/* Chart 1: Distribution */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Total Waste Distribution (This Week)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={wasteByMaterial}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {wasteByMaterial.map((entry, index) => (
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

        {/* Chart 2: Trends */}
        <div className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm dark:border-zinc-800 dark:bg-zinc-900">
          <h3 className="mb-4 text-lg font-semibold text-zinc-900 dark:text-zinc-50">
            Daily Waste Trends (kg)
          </h3>
          <div className="h-[300px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={weeklyWasteTrends}>
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
                  tickFormatter={(value) => `${value}kg`}
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
                <Bar dataKey="Landfill" stackId="a" fill="#ef4444" radius={[0, 0, 4, 4]} />
                <Bar dataKey="Recycling" stackId="a" fill="#3b82f6" />
                <Bar dataKey="Compost" stackId="a" fill="#22c55e" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
