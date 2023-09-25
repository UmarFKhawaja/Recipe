export interface InfiniteData<T extends { id: string; }> {
  items: T[];
  hasMore: boolean;
}
