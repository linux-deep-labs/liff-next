"use client";

import {
  createContext,
  useEffect,
  useState,
} from "react";

type Session = {
  expiresAt: number;
};

type SessionContextType = {
  session: Session | null;

  loading: boolean;

  refreshing: boolean;

  expired: boolean;

  refresh: () => Promise<void>;

  clear: () => void;
};

export const SessionContext =
  createContext<SessionContextType | null>(null);

export default function SessionProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [session, setSession] =
    useState<Session | null>(null);

  const [loading, setLoading] =
    useState(true);

  const [refreshing, setRefreshing] =
    useState(false);

  async function fetchSession() {
    try {
      setLoading(true);

      const res = await fetch(
        "/api/auth/session"
      );

      if (!res.ok) {
        setSession(null);
        return;
      }

      const data = await res.json();

      setSession(data.session);
    } catch {
      setSession(null);
    } finally {
      setLoading(false);
    }
  }

  async function refresh() {
    try {
      setRefreshing(true);

      const res = await fetch(
        "/api/auth/refresh",
        {
          method: "POST",
        }
      );

      if (!res.ok) {
        setSession(null);
        return;
      }

      const data = await res.json();

      setSession(data.session);
    } finally {
      setRefreshing(false);
    }
  }

  function clear() {
    setSession(null);
  }

  const expired = session
    ? Date.now() > session.expiresAt
    : false;

  useEffect(() => {
    fetchSession();
  }, []);

  return (
    <SessionContext.Provider
      value={{
        session,

        loading,

        refreshing,

        expired,

        refresh,

        clear,
      }}
    >
      {children}
    </SessionContext.Provider>
  );
}