export interface FiniteData<T extends { id: string; }> {
  items: T[];
}
