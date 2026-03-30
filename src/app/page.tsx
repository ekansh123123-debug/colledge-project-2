"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
} from "recharts";
import { Leaf, Zap, Droplets, Trash2, ArrowDown, ArrowUp } from "lucide-react";

const energyData = [
  { name: "Mon", energy: 4000, solar: 2400 },
  { name: "Tue", energy: 3000, solar: 1398 },
  { name: "Wed", energy: 2000, solar: 9800 },
  { name: "Thu", energy: 2780, solar: 3908 },
  { name: "Fri", energy: 1890, solar: 4800 },
  { name: "Sat", energy: 2390, solar: 3800 },
  { name: "Sun", energy: 3490, solar: 4300 },
];

const wasteData = [
  { name: "Recycling", value: 400 },
  { name: "Compost", value: 300 },
  { name: "Landfill", value: 300 },
  { name: "E-Waste", value: 200 },
];

import { useAuth } from "@/components/auth-provider";

export default function Dashboard() {
  const { role } = useAuth();

  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
            {role === "admin" ? "Campus Overview" : "Your Sustainability Impact"}
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            {role === "admin"
              ? "Daily sustainability metrics and high-level summaries for the entire campus."
              : "Track your personal contributions and view campus-wide goals."}
          </p>
        </div>
        {role === "student" && (
          <div className="flex items-center gap-2 bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-400 px-4 py-2 rounded-lg border border-green-200 dark:border-green-800/30 text-sm font-medium">
            <Leaf className="h-4 w-4" />
            Top 10% of Green Students this month!
          </div>
        )}
      </div>

      {/* Summary Cards */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total Carbon Offset
            </h3>
            <Leaf className="h-4 w-4 text-green-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              2,450 kg
            </p>
            <p className="flex items-center text-sm font-medium text-green-600 dark:text-green-500">
              <ArrowUp className="h-4 w-4" />
              12%
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Energy Consumption
            </h3>
            <Zap className="h-4 w-4 text-amber-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              12.4 MWh
            </p>
            <p className="flex items-center text-sm font-medium text-green-600 dark:text-green-500">
              <ArrowDown className="h-4 w-4" />
              4%
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Water Saved
            </h3>
            <Droplets className="h-4 w-4 text-blue-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              45,000 L
            </p>
            <p className="flex items-center text-sm font-medium text-green-600 dark:text-green-500">
              <ArrowUp className="h-4 w-4" />
              8%
            </p>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Waste Diverted
            </h3>
            <Trash2 className="h-4 w-4 text-purple-500" />
          </div>
          <div className="mt-2 flex items-baseline gap-2">
            <p className="text-3xl font-bold text-zinc-900 dark:text-zinc-50">
              68%
            </p>
            <p className="flex items-center text-sm font-medium text-green-600 dark:text-green-500">
              <ArrowUp className="h-4 w-4" />
              2.5%
            </p>
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm lg:col-span-4">
          <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Energy Usage vs Solar Generation
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={energyData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#52525b" opacity={0.2} />
                <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} tickFormatter={(value) => `${value} kWh`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Line type="monotone" dataKey="energy" stroke="#f59e0b" strokeWidth={2} dot={false} name="Consumption" />
                <Line type="monotone" dataKey="solar" stroke="#10b981" strokeWidth={2} dot={false} name="Solar Gen" />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm lg:col-span-3">
          <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Waste Distribution (kg)
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={wasteData}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#52525b" opacity={0.2} />
                <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <Tooltip
                  cursor={{fill: 'transparent'}}
                  contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Bar dataKey="value" fill="#8b5cf6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
    </div>
  );
}
