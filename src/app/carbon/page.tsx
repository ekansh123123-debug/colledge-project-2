"use client";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { Leaf, Car, Zap, Utensils, Info } from "lucide-react";

const monthlyData = [
  { name: "Jan", footprint: 450, offset: 120 },
  { name: "Feb", footprint: 420, offset: 150 },
  { name: "Mar", footprint: 380, offset: 200 },
  { name: "Apr", footprint: 390, offset: 250 },
  { name: "May", footprint: 350, offset: 280 },
  { name: "Jun", footprint: 320, offset: 310 },
];

const categoryData = [
  { name: "Transportation", value: 45, color: "#3b82f6" },
  { name: "Energy", value: 30, color: "#f59e0b" },
  { name: "Food", value: 15, color: "#10b981" },
  { name: "Other", value: 10, color: "#8b5cf6" },
];

export default function CarbonTracker() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            <Leaf className="h-6 w-6 text-green-500" />
            Carbon Footprint Tracker
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Monitor personal and campus-wide CO2 emissions and offset activities.
          </p>
        </div>
        <button className="inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-green-600 text-white hover:bg-green-700 h-10 px-4 py-2">
          Log Activity
        </button>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Current Month CO2e
            <Info className="h-4 w-4 text-zinc-400" />
          </div>
          <div className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            320 kg
          </div>
          <p className="mt-1 text-sm text-green-600 dark:text-green-500">
            -8% from last month
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Total Offset
            <Info className="h-4 w-4 text-zinc-400" />
          </div>
          <div className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            1,310 kg
          </div>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Equivalent to 65 trees planted
          </p>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center gap-2 text-sm font-medium text-zinc-500 dark:text-zinc-400">
            Net Emissions
            <Info className="h-4 w-4 text-zinc-400" />
          </div>
          <div className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            10 kg
          </div>
          <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
            Almost carbon neutral!
          </p>
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Trend Area Chart */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm lg:col-span-2">
          <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Emissions vs Offsets (6 Months)
          </h3>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={monthlyData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <defs>
                  <linearGradient id="colorFootprint" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                  </linearGradient>
                  <linearGradient id="colorOffset" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.3} />
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <XAxis dataKey="name" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} />
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#52525b" opacity={0.2} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }}
                />
                <Area type="monotone" dataKey="footprint" stroke="#ef4444" fillOpacity={1} fill="url(#colorFootprint)" name="Emissions (kg)" />
                <Area type="monotone" dataKey="offset" stroke="#10b981" fillOpacity={1} fill="url(#colorOffset)" name="Offset (kg)" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Breakdown Donut Chart */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm lg:col-span-1">
          <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Emission Sources
          </h3>
          <div className="h-[250px] relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={categoryData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={5}
                  dataKey="value"
                >
                  {categoryData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  itemStyle={{ color: '#fff' }}
                />
              </PieChart>
            </ResponsiveContainer>
            {/* Legend Replacement */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
              <span className="block text-2xl font-bold text-zinc-900 dark:text-zinc-50">100%</span>
            </div>
          </div>
          <div className="mt-4 grid grid-cols-2 gap-2 text-sm">
            {categoryData.map((cat) => (
              <div key={cat.name} className="flex items-center gap-2">
                <span className="block h-3 w-3 rounded-full" style={{ backgroundColor: cat.color }}></span>
                <span className="text-zinc-600 dark:text-zinc-400">{cat.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Recent Activities */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-sm">
        <div className="border-b border-zinc-200 dark:border-zinc-800 p-6">
          <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">Recent Activities</h3>
        </div>
        <ul className="divide-y divide-zinc-200 dark:divide-zinc-800">
          {[
            { icon: Car, title: "Carpool to Campus", date: "Today", impact: "-2.5 kg CO2e", color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" },
            { icon: Zap, title: "Campus Server Usage", date: "Yesterday", impact: "+1.2 kg CO2e", color: "text-amber-500", bg: "bg-amber-100 dark:bg-amber-900/30" },
            { icon: Utensils, title: "Plant-based Meal", date: "Yesterday", impact: "-1.8 kg CO2e", color: "text-green-500", bg: "bg-green-100 dark:bg-green-900/30" },
          ].map((item, idx) => (
            <li key={idx} className="flex items-center justify-between p-6 hover:bg-zinc-50 dark:hover:bg-zinc-800/50 transition-colors">
              <div className="flex items-center gap-4">
                <div className={`flex h-10 w-10 items-center justify-center rounded-full ${item.bg}`}>
                  <item.icon className={`h-5 w-5 ${item.color}`} />
                </div>
                <div>
                  <p className="font-medium text-zinc-900 dark:text-zinc-50">{item.title}</p>
                  <p className="text-sm text-zinc-500 dark:text-zinc-400">{item.date}</p>
                </div>
              </div>
              <span className={`font-medium ${item.impact.startsWith("-") ? "text-green-600 dark:text-green-500" : "text-amber-600 dark:text-amber-500"}`}>
                {item.impact}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
