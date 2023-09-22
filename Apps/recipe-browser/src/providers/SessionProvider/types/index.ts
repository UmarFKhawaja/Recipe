export interface SessionType {
  isAuthenticated: boolean;

  invalidateAuthentication: () => void;
}
