"use client";

import { useAuth } from "@/components/auth-provider";
import { Leaf, GraduationCap, ShieldCheck } from "lucide-react";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Login() {
  const { login, role } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (role) {
      router.push("/");
    }
  }, [role, router]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 dark:bg-zinc-950 p-4">
      <div className="w-full max-w-md rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-8 shadow-sm">
        <div className="flex flex-col items-center mb-8 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
            <Leaf className="h-8 w-8 text-green-600 dark:text-green-500" />
          </div>
          <h1 className="text-2xl font-bold text-zinc-900 dark:text-zinc-50">
            EcoCampus Dashboard
          </h1>
          <p className="mt-2 text-sm text-zinc-500 dark:text-zinc-400">
            Sign in to access the sustainability portal and issue tracker.
          </p>
        </div>

        <div className="space-y-4">
          <button
            onClick={() => login("student")}
            className="flex w-full items-center justify-between rounded-xl border-2 border-zinc-200 dark:border-zinc-800 p-4 transition-colors hover:border-green-500 hover:bg-green-50 dark:hover:border-green-500 dark:hover:bg-green-900/20 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-500 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 group-hover:text-green-700 dark:group-hover:text-green-400">
                <GraduationCap className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">Student Login</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Report issues, track personal habits</p>
              </div>
            </div>
          </button>

          <button
            onClick={() => login("admin")}
            className="flex w-full items-center justify-between rounded-xl border-2 border-zinc-200 dark:border-zinc-800 p-4 transition-colors hover:border-green-500 hover:bg-green-50 dark:hover:border-green-500 dark:hover:bg-green-900/20 group"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber-100 dark:bg-amber-900/30 text-amber-600 dark:text-amber-500 group-hover:bg-green-200 dark:group-hover:bg-green-800/50 group-hover:text-green-700 dark:group-hover:text-green-400">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <div className="text-left">
                <p className="font-semibold text-zinc-900 dark:text-zinc-50">Admin Login</p>
                <p className="text-xs text-zinc-500 dark:text-zinc-400">Manage issues, view global metrics</p>
              </div>
            </div>
          </button>
        </div>

        <div className="mt-8 text-center text-xs text-zinc-500 dark:text-zinc-400">
          <p>For demo purposes, no password is required.</p>
        </div>
      </div>
    </div>
  );
}
