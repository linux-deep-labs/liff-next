"use client";

import { useContext } from "react";

import { SessionContext }
  from "../providers/SessionProvider";

export function useSession() {
  const context = useContext(SessionContext);

  if (!context) {
    throw new Error(
      "useSession must be used within SessionProvider"
    );
  }

  return {
    ...context,

    authenticated: !!context.session,

    expired:
      context.session
        ? Date.now() >
          context.session.expiresAt
        : false,
  };
}