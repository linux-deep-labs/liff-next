const COOKIE_OPTIONS = {
  httpOnly: true,

  secure:
    process.env.NODE_ENV ===
    "production",

  sameSite: "lax" as const,

  path: "/",
};

import { cookies } from "next/headers";

export async function setCookie(
  name: string,
  value: string,
  maxAge?: number
) {
  cookies().set(name, value, {
    ...COOKIE_OPTIONS,

    maxAge,
  });
}


export async function getCookie(
  name: string
) {
  return cookies().get(name)
    ?.value;
}

export async function deleteCookie(
  name: string
) {
  cookies().delete(name);
}

export async function setSessionCookie(
  token: string
) {
  await setCookie(
    SESSION_COOKIE,
    token,
    60 * 60 * 24
  );
}

export async function setRefreshCookie(
  token: string
) {
  await setCookie(
    REFRESH_COOKIE,
    token,
    60 * 60 * 24 * 7
  );
}

export async function clearAuthCookies() {
  await deleteCookie(
    SESSION_COOKIE
  );

  await deleteCookie(
    REFRESH_COOKIE
  );
}


