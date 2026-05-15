type User = {
  role: string;

  permissions: string[];
};

type ProtectOptions = {
  requiredRole?: string;

  requiredPermissions?: string[];
};

export function protectRoute(
  user: User | null,
  options?: ProtectOptions
) {
  if (!user) {
    return {
      allowed: false,
      status: 401,
      reason: "UNAUTHORIZED",
    };
  }

  if (
    options?.requiredRole &&
    user.role !== options.requiredRole
  ) {
    return {
      allowed: false,
      status: 403,
      reason: "FORBIDDEN",
    };
  }

  if (
    options?.requiredPermissions?.length
  ) {
    const hasAllPermissions =
      options.requiredPermissions.every(
        (permission) =>
          user.permissions.includes(permission)
      );

    if (!hasAllPermissions) {
      return {
        allowed: false,
        status: 403,
        reason: "INSUFFICIENT_PERMISSION",
      };
    }
  }

  return {
    allowed: true,
    status: 200,
  };
}