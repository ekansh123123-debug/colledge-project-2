"use client";

import { usePathname } from "next/navigation";
import { LayoutWrapper } from "./layout-wrapper";
import { useAuth } from "./auth-provider";

export function RootLayoutInner({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const { isAuthenticated } = useAuth();

  // Don't render sidebar wrapper on login page
  if (pathname === "/login") {
    return <>{children}</>;
  }

  // Double check auth state to prevent flash of content before redirecting
  if (!isAuthenticated) return null;

  return <LayoutWrapper>{children}</LayoutWrapper>;
}
