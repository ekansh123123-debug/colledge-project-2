"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import {
  LayoutDashboard,
  Leaf,
  Trash2,
  Zap,
  Droplets,
  MonitorSmartphone,
  Wind,
  UtensilsCrossed,
  HeartHandshake,
  CarFront,
  Menu,
  X,
} from "lucide-react";
import { useState } from "react";
import { ModeToggle } from "./mode-toggle";

const navigation = [
  { name: "Dashboard", href: "/", icon: LayoutDashboard },
  { name: "Carbon Footprint", href: "/carbon", icon: Leaf },
  { name: "Waste Management", href: "/waste", icon: Trash2 },
  { name: "Energy Monitoring", href: "/energy", icon: Zap },
  { name: "Water Conservation", href: "/water", icon: Droplets },
  { name: "E-Waste Platform", href: "/e-waste", icon: MonitorSmartphone },
  { name: "Air Quality", href: "/air-quality", icon: Wind },
  { name: "Food Waste", href: "/food-waste", icon: UtensilsCrossed },
  { name: "Green Habits", href: "/habits", icon: HeartHandshake },
  { name: "Eco-Transport", href: "/transport", icon: CarFront },
];

import { useAuth } from "./auth-provider";
import { AlertCircle, LogOut } from "lucide-react";

export function LayoutWrapper({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { role, logout } = useAuth();

  const fullNavigation = [
    ...navigation,
    { name: "Issue Tracker", href: "/issues", icon: AlertCircle }
  ];

  return (
    <div className="flex h-screen overflow-hidden bg-zinc-50 dark:bg-zinc-950">
      {/* Mobile sidebar */}
      <div
        className={cn(
          "fixed inset-0 z-50 flex md:hidden",
          sidebarOpen ? "block" : "hidden"
        )}
      >
        {/* Overlay */}
        <div
          className="fixed inset-0 bg-zinc-900/80 transition-opacity"
          onClick={() => setSidebarOpen(false)}
        />

        <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white dark:bg-zinc-900 pt-5 pb-4">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <span className="sr-only">Close sidebar</span>
              <X className="h-6 w-6 text-white" aria-hidden="true" />
            </button>
          </div>
          <div className="flex flex-shrink-0 items-center px-4">
            <h1 className="text-xl font-bold text-green-600 dark:text-green-500 flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              EcoCampus
            </h1>
          </div>
          <div className="mt-5 h-0 flex-1 overflow-y-auto">
            <nav className="space-y-1 px-2">
              {fullNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setSidebarOpen(false)}
                    className={cn(
                      isActive
                        ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-500"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
                      "group flex items-center rounded-md px-2 py-2 text-base font-medium transition-colors"
                    )}
                  >
                    <item.icon
                      className={cn(
                        isActive
                          ? "text-green-600 dark:text-green-500"
                          : "text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300",
                        "mr-4 flex-shrink-0 h-6 w-6 transition-colors"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Static sidebar for desktop */}
      <div className="hidden md:flex md:w-64 md:flex-col">
        <div className="flex flex-grow flex-col overflow-y-auto border-r border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <h1 className="text-2xl font-bold text-green-600 dark:text-green-500 flex items-center gap-2">
              <Leaf className="h-6 w-6" />
              EcoCampus
            </h1>
          </div>
          <div className="mt-8 flex flex-1 flex-col justify-between">
            <nav className="flex-1 space-y-1 px-2">
              {fullNavigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={cn(
                      isActive
                        ? "bg-green-50 text-green-600 dark:bg-green-900/20 dark:text-green-500"
                        : "text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-800",
                      "group flex items-center rounded-md px-2 py-2 text-sm font-medium transition-colors"
                    )}
                  >
                    <item.icon
                      className={cn(
                        isActive
                          ? "text-green-600 dark:text-green-500"
                          : "text-zinc-400 group-hover:text-zinc-500 dark:group-hover:text-zinc-300",
                        "mr-3 flex-shrink-0 h-5 w-5 transition-colors"
                      )}
                      aria-hidden="true"
                    />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
        </div>
      </div>

      {/* Main content area */}
      <div className="flex flex-1 flex-col overflow-hidden">
        {/* Top navbar for mobile and generic header actions */}
        <header className="flex h-16 flex-shrink-0 items-center justify-between border-b border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 px-4 md:justify-end">
          <div className="flex items-center md:hidden">
            <button
              type="button"
              className="-ml-2.5 inline-flex h-10 w-10 items-center justify-center rounded-md text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-green-500"
              onClick={() => setSidebarOpen(true)}
            >
              <span className="sr-only">Open sidebar</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
            <h1 className="ml-2 text-lg font-bold text-green-600 dark:text-green-500 md:hidden flex items-center gap-1">
              <Leaf className="h-5 w-5" />
              EcoCampus
            </h1>
          </div>
          <div className="flex items-center gap-4">
            {role === "student" && (
              <Link
                href="/issues"
                className="hidden md:inline-flex items-center justify-center rounded-md bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-colors"
              >
                Report Issue
              </Link>
            )}
            <div className="hidden md:flex items-center px-3 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-xs font-medium text-zinc-600 dark:text-zinc-400 capitalize">
              {role} View
            </div>
            <ModeToggle />
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-green-100 dark:bg-green-900 flex items-center justify-center text-green-700 dark:text-green-300 font-bold text-sm uppercase">
                {role ? role[0] : "U"}
              </div>
              <button
                onClick={logout}
                className="p-2 text-zinc-500 hover:text-red-500 transition-colors rounded-md hover:bg-red-50 dark:hover:bg-red-900/20"
                title="Logout"
              >
                <LogOut className="h-4 w-4" />
              </button>
            </div>
          </div>
        </header>

        {/* Main content */}
        <main className="flex-1 overflow-y-auto p-4 md:p-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
      </div>
    </div>
  );
}
