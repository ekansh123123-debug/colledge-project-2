"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ComposedChart,
  Line,
} from "recharts";
import { Zap, Sun, Building, Lightbulb } from "lucide-react";

const buildingData = [
  { name: "Science Bldg", hvac: 1200, lighting: 400, equip: 800 },
  { name: "Library", hvac: 900, lighting: 600, equip: 300 },
  { name: "Dorms", hvac: 1500, lighting: 800, equip: 1200 },
  { name: "Dining Hall", hvac: 1800, lighting: 500, equip: 2000 },
  { name: "Admin", hvac: 600, lighting: 300, equip: 400 },
];

const hourlyData = Array.from({ length: 24 }).map((_, i) => ({
  time: `${i}:00`,
  usage: Math.floor(Math.random() * 500) + 200,
  target: 400,
}));

export default function EnergyMonitoring() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 flex items-center gap-2">
            <Zap className="h-6 w-6 text-amber-500" />
            Energy Monitoring System
          </h2>
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            Real-time analytics of campus-wide power consumption and generation.
          </p>
        </div>
        <div className="flex gap-2">
          <button className="inline-flex items-center justify-center rounded-md border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-sm font-medium hover:bg-zinc-100 dark:hover:bg-zinc-800 h-10 px-4 py-2 transition-colors">
            Export Report
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Total Current Load
            </h3>
            <span className="flex h-2 w-2 rounded-full bg-red-500 animate-pulse"></span>
          </div>
          <div className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            4.2 MW
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Solar Generation
            </h3>
            <Sun className="h-4 w-4 text-amber-500" />
          </div>
          <div className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            1.8 MW
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Grid Dependency
            </h3>
            <Building className="h-4 w-4 text-zinc-400" />
          </div>
          <div className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            57%
          </div>
        </div>
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-medium text-zinc-500 dark:text-zinc-400">
              Est. Daily Cost
            </h3>
            <span className="text-zinc-400 text-sm">$</span>
          </div>
          <div className="mt-2 text-3xl font-bold text-zinc-900 dark:text-zinc-50">
            $4,250
          </div>
        </div>
      </div>

      {/* Charts Layout */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Hourly Usage Curve */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm lg:col-span-2">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-medium text-zinc-900 dark:text-zinc-50">
              Today's Load Profile vs Target
            </h3>
            <span className="text-xs font-medium text-zinc-500 bg-zinc-100 dark:bg-zinc-800 px-2 py-1 rounded">Live Data</span>
          </div>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={hourlyData} margin={{ top: 20, right: 20, bottom: 20, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#52525b" opacity={0.2} />
                <XAxis dataKey="time" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} tick={{dy: 10}} />
                <YAxis stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} tick={{dx: -10}} tickFormatter={(val) => `${val}kW`} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  cursor={{fill: '#f4f4f5', opacity: 0.1}}
                />
                <Bar dataKey="usage" fill="#3b82f6" radius={[4, 4, 0, 0]} name="Actual Usage" />
                <Line type="step" dataKey="target" stroke="#ef4444" strokeWidth={2} dot={false} name="Target Load" strokeDasharray="5 5" />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Breakdown Stacked Bar Chart */}
        <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 shadow-sm lg:col-span-1">
          <h3 className="mb-4 text-lg font-medium text-zinc-900 dark:text-zinc-50">
            Consumption Breakdown by Building (kWh)
          </h3>
          <div className="h-[350px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={buildingData} layout="vertical" margin={{ top: 20, right: 30, left: 40, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#52525b" opacity={0.2} />
                <XAxis type="number" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} hide />
                <YAxis dataKey="name" type="category" stroke="#71717a" fontSize={12} tickLine={false} axisLine={false} width={80} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#18181b', border: 'none', borderRadius: '8px', color: '#fff' }}
                  cursor={{fill: '#f4f4f5', opacity: 0.1}}
                />
                <Bar dataKey="hvac" stackId="a" fill="#0ea5e9" name="HVAC" />
                <Bar dataKey="lighting" stackId="a" fill="#f59e0b" name="Lighting" />
                <Bar dataKey="equip" stackId="a" fill="#8b5cf6" name="Equipment" radius={[0, 4, 4, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <div className="mt-4 flex flex-wrap gap-4 text-xs justify-center">
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-[#0ea5e9]"></span>HVAC</div>
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-[#f59e0b]"></span>Lighting</div>
            <div className="flex items-center gap-2"><span className="h-3 w-3 rounded-sm bg-[#8b5cf6]"></span>Equipment</div>
          </div>
        </div>
      </div>

      {/* Suggestions Section */}
      <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-amber-50 dark:bg-amber-950/20 p-6">
        <div className="flex gap-4">
          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/50">
            <Lightbulb className="h-5 w-5 text-amber-600 dark:text-amber-500" />
          </div>
          <div>
            <h4 className="text-base font-medium text-amber-900 dark:text-amber-500">AI Recommendation</h4>
            <p className="mt-1 text-sm text-amber-800 dark:text-amber-200/70">
              Peak demand expected between 2PM and 4PM today. Pre-cooling the Library and Admin buildings now could reduce peak load costs by an estimated $120 today.
            </p>
            <div className="mt-4 flex gap-3">
              <button className="rounded-md bg-amber-500 px-3 py-1.5 text-sm font-medium text-white hover:bg-amber-600 transition-colors">
                Apply Pre-cooling Strategy
              </button>
              <button className="rounded-md px-3 py-1.5 text-sm font-medium text-amber-700 hover:bg-amber-100 dark:text-amber-500 dark:hover:bg-amber-900/30 transition-colors">
                Dismiss
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
