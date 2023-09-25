import { useCallback, useState } from 'react';
import { ApolloError, gql, useQuery } from '@apollo/client';
import { useListState } from '@mantine/hooks';
import { InfiniteDataRequest, InfiniteDataResponse } from '../types';

export function useInfiniteData<T extends { id: string; }>(request: InfiniteDataRequest): InfiniteDataResponse<T> {
  const {
    skip,
    take,
    setSkip
  } = request;

  const [items, itemsHandler] = useListState<T>();

  const [error, setError] = useState<Error | null>(null);

  const [hasMore, setHasMore] = useState<boolean>(true);

  const { loading: isLoading, fetchMore: fetchMoreImpl } = useQuery(gql(request.command), {
    variables: request.variables,
    onCompleted: (data) => {
      const page = data[request.name];

      itemsHandler.append(...page.items);
      setHasMore(page.hasMore);
    },
    onError: (error: ApolloError) => {
      setError(error);
    }
  });

  const fetchMore = useCallback(async () => {
    setSkip((skip: number) => skip + take);

    await fetchMoreImpl({
      variables: {
        skip
      }
    });
  }, [fetchMoreImpl, skip, setSkip, take]);

  return {
    items,
    skip,
    take,
    error,
    hasMore,
    isLoading,
    fetchMore
  };
}
