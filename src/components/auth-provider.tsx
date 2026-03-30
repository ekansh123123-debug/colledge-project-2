"use client";

import React, { createContext, useContext, useState, ReactNode, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

export type Role = "admin" | "student" | null;

interface AuthContextType {
  role: Role;
  login: (role: Role) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [role, setRole] = useState<Role>(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    // Basic mock persistence using localStorage
    const savedRole = localStorage.getItem("app_role") as Role;
    if (savedRole) {
      setRole(savedRole);
    }
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      if (!role && pathname !== "/login") {
        router.push("/login");
      } else if (role && pathname === "/login") {
        router.push("/");
      }
    }
  }, [role, pathname, isLoaded, router]);

  const login = (newRole: Role) => {
    setRole(newRole);
    if (newRole) {
      localStorage.setItem("app_role", newRole);
    }
    router.push("/");
  };

  const logout = () => {
    setRole(null);
    localStorage.removeItem("app_role");
    router.push("/login");
  };

  // Only block rendering of children if we are NOT on the login page and NOT loaded.
  // This allows Tailwind and global styles to load properly.
  return (
    <AuthContext.Provider value={{ role, login, logout, isAuthenticated: !!role }}>
      <div className={!isLoaded ? "opacity-0" : "opacity-100 transition-opacity duration-300"}>
        {children}
      </div>
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}
