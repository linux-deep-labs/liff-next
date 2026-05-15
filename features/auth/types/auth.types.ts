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