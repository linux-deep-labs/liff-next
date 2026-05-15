"use client";

import { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error(
      "useAuth must be used within AuthProvider"
    );
  }

  return {
    ...context,

    authenticated: !!context.user,

    hasRole: (role: string) => {
      return context.user?.role === role;
    },

    hasPermission: (permission: string) => {
      return (
        context.user?.permissions.includes(permission) ??
        false
      );
    },
  };
}