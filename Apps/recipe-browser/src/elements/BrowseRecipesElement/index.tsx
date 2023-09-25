import { useMemo, useState } from 'react';
import { Container, SimpleGrid } from '@mantine/core';
import { RecipeCard, RecipeSkeleton } from '../../components';
import { useInfiniteData } from '../../hooks';
import { Recipe } from '../../types';
import { getRecipesQuery } from './commands';

export function BrowseRecipesElement() {
  const [skip, setSkip] = useState<number>(0);

  const take: number = 12;

  const query = useMemo(() => getRecipesQuery(skip, take), [skip, take]);

  const data = useInfiniteData<Recipe>({
    name: 'getRecipes',
    command: query.toString(),
    variables: query.variable,
    skip,
    take,
    setSkip
  });

  return (
    <Container fluid>
      <SimpleGrid cols={4}>
        {
          data.items
            ? data.items.map((recipe: Recipe) => <RecipeCard key={recipe.id} recipe={recipe}/>)
            : <RecipeSkeleton/>
        }
      </SimpleGrid>
    </Container>
  );
}
