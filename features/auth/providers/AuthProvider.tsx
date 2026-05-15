"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

type User = {
  id: string;
  displayName: string;
  role: string;
  permissions: string[];
};

type AuthContextType = {
  user: User | null;
  loading: boolean;

  login: () => Promise<void>;
  logout: () => Promise<void>;

  refreshSession: () => Promise<void>;
};

export const AuthContext =
  createContext<AuthContextType | null>(null);

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [user, setUser] = useState<User | null>(
    null
  );

  const [loading, setLoading] = useState(true);

  async function fetchSession() {
    try {
      setLoading(true);

      const res = await fetch("/api/auth/session");

      if (!res.ok) {
        setUser(null);
        return;
      }

      const data = await res.json();

      setUser(data.user);
    } catch (error) {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }

  async function login() {
    // LIFF Login Logic
  }

  async function logout() {
    await fetch("/api/auth/logout", {
      method: "POST",
    });

    setUser(null);
  }

  async function refreshSession() {
    await fetchSession();
  }

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,

        login,
        logout,

        refreshSession,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}