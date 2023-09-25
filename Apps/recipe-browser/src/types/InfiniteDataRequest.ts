import { Dispatch, SetStateAction } from 'react';
import { InfiniteDataRequestVariables } from './InfiniteDataRequestVariables';

export interface InfiniteDataRequest {
  name: string;
  command: string;
  variables: InfiniteDataRequestVariables;
  skip: number;
  setSkip: Dispatch<SetStateAction<number>>;
  take: number;
}
