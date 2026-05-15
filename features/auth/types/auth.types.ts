type UseAuthReturn = {
  user: User | null;
  loading: boolean;
  authenticated: boolean;

  login: () => Promise<void>;
  logout: () => Promise<void>;

  refreshSession: () => Promise<void>;

  hasRole: (role: string) => boolean;
  hasPermission: (permission: string) => boolean;
};

type User = {
  id: string;
  lineUserId: string;
  displayName: string;
  pictureUrl?: string;

  role: string;

  permissions: string[];
};

type LogoutButtonProps = {
  redirectTo?: string;

  className?: string;

  children?: React.ReactNode;

  confirm?: boolean;
};

type Session = {
  user: User;

  accessToken?: string;

  expiresAt: number;

  issuedAt: number;

  tenantId?: string;
};

type JwtPayload = {
  userId: string;

  role: string;

  tenantId?: string;

  permissions: string[];
};