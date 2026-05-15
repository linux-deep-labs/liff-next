"use client";

import { useAuth } from "../hooks/useAuth";

export default function LoginButton() {
  const { login, loading } = useAuth();

  return (
    <button
      onClick={login}
      disabled={loading}
    >
      {loading ? "Loading..." : "Login with LINE"}
    </button>
  );
}