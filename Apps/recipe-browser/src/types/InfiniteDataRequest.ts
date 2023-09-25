import { Dispatch, SetStateAction } from 'react';

export interface InfiniteDataRequest {
  name: string;
  command: string;
  variables: Record<string, any>;
  skip: number;
  setSkip: Dispatch<SetStateAction<number>>;
  take: number;
}
