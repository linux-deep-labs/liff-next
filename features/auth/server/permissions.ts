export function hasRole(
  userRole: Role,
  requiredRole: Role
) {
  return userRole === requiredRole;
}

export function hasAnyRole(
  userRole: Role,
  roles: Role[]
) {
  return roles.includes(userRole);
}

hasAnyRole(user.role, [
  "admin",
  "owner",
])

export function hasPermission(
  userPermissions: Permission[],
  permission: Permission
) {
  return userPermissions.includes(
    permission
  );
}

export function hasAllPermissions(
  userPermissions: Permission[],
  requiredPermissions: Permission[]
) {
  return requiredPermissions.every(
    (permission) =>
      userPermissions.includes(permission)
  );
}

export function hasAnyPermission(
  userPermissions: Permission[],
  permissions: Permission[]
) {
  return permissions.some(
    (permission) =>
      userPermissions.includes(permission)
  );
}

type AccessOptions = {
  roles?: Role[];

  permissions?: Permission[];
};

export function canAccess(
  user: User,
  options: AccessOptions
) {
  if (
    options.roles &&
    !hasAnyRole(
      user.role,
      options.roles
    )
  ) {
    return false;
  }

  if (
    options.permissions &&
    !hasAllPermissions(
      user.permissions,
      options.permissions
    )
  ) {
    return false;
  }

  return true;
}