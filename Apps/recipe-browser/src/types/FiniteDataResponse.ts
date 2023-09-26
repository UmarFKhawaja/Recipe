export interface FiniteDataResponse<T extends { id: string; }> {
  data: T | null;
  error: Error | null;
  isLoading: boolean;
}
