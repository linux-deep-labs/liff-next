"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { useAuth } from "../hooks/useAuth";

type Props = {
  redirectTo?: string;
  className?: string;
  children?: React.ReactNode;
};

export default function LogoutButton({
  redirectTo = "/login",
  className,
  children,
}: Props) {
  const { logout } = useAuth();

  const router = useRouter();

  const [loading, setLoading] = useState(false);

  async function handleLogout() {
    try {
      setLoading(true);

      await logout();

      router.push(redirectTo);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <button
      onClick={handleLogout}
      disabled={loading}
      className={className}
    >
      {loading
        ? "Signing out..."
        : children || "Logout"}
    </button>
  );
}