export type JwtPayload = {
  userId: string;

  role: string;

  permissions: string[];

  tenantId?: string;
};
const ACCESS_EXPIRES_IN =
  "15m";

const REFRESH_EXPIRES_IN =
  "7d";

  import jwt from "jsonwebtoken";

const ACCESS_SECRET =
  process.env.JWT_SECRET!;

export function signAccessToken(
  payload: JwtPayload
) {
  return jwt.sign(
    payload,
    ACCESS_SECRET,
    {
      expiresIn: "15m",
    }
  );
}

export function verifyAccessToken(
  token: string
) {
  return jwt.verify(
    token,
    ACCESS_SECRET
  ) as JwtPayload;
}

const REFRESH_SECRET =
  process.env.JWT_REFRESH_SECRET!;

export function signRefreshToken(
  payload: JwtPayload
) {
  return jwt.sign(
    payload,
    REFRESH_SECRET,
    {
      expiresIn: "7d",
    }
  );
}

export function verifyRefreshToken(
  token: string
) {
  return jwt.verify(
    token,
    REFRESH_SECRET
  ) as JwtPayload;
}

export function decodeToken(
  token: string
) {
  return jwt.decode(token);
}

