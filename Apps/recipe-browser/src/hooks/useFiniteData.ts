import { useState } from 'react';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { FiniteDataRequest, FiniteDataResponse } from '../types';

export function useFiniteData<T extends { id: string; }>(request: FiniteDataRequest): FiniteDataResponse<T> {
  const [data, setData] = useState<T | null>(null);

  const [error, setError] = useState<Error | null>(null);

  const { loading: isLoading } = useQuery(gql(request.command), {
    variables: request.variables,
    onCompleted: (data) => {
      setData(data[request.name]);
    },
    onError: (error: ApolloError) => {
      setError(error);
    }
  });

  return {
    data,
    error,
    isLoading
  };
}
