export async function createSession(
  payload: object
) {
  const token =
    signAccessToken(payload);

  cookies().set(
    SESSION_COOKIE,
    token,
    {
      httpOnly: true,

      secure:
        process.env.NODE_ENV ===
        "production",

      sameSite: "lax",

      path: "/",

      maxAge: 60 * 60 * 24,
    }
  );

  return token;
}

export async function getSession() {
  const cookieStore =
    cookies();

  const token =
    cookieStore.get(
      SESSION_COOKIE
    )?.value;

  if (!token) {
    return null;
  }

  try {
    const payload =
      verifyAccessToken(token);

    return payload;
  } catch {
    return null;
  }
}

export async function destroySession() {
  cookies().delete(
    SESSION_COOKIE
  );
}

export async function validateSession() {
  const session =
    await getSession();

  if (!session) {
    return false;
  }

  return true;
}

export async function validateSession() {
  const session =
    await getSession();

  return {
    valid: !!session,

    session,
  };
}
export async function refreshSession(
  refreshToken: string
) {
  // verify refresh token

  // issue new access token

  // set new cookie
}
