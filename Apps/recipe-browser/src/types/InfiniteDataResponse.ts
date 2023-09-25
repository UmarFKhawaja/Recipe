export interface InfiniteDataResponse<T extends { id: string; }> {
  items: T[];
  error: Error | null;
  skip: number;
  take: number;
  hasMore: boolean;
  isLoading: boolean;
  fetchMore: () => void;
}
