import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text } from '@mantine/core';
import { IconPlus } from '@tabler/icons-react';
import { useFiniteData } from '../../hooks';
import { Recipe } from '../../types';
import { getRecipesQuery } from './commands';
import { RecipeData } from './types';

export function ManageRecipesElement() {
  const query = useMemo(() => getRecipesQuery(), []);

  const data = useFiniteData<RecipeData>({
    name: 'getRecipes',
    command: query.toString(),
    variables: query.variable
  });

  return (
    <>
      <Box>
        <Button component={Link} variant="transparent" to="/create/recipe">
          <IconPlus/>
          <Text ml="xs">Create new recipe</Text>
        </Button>
        {
          data.data?.recipes?.map((recipe: Recipe) => (
            <Text key={recipe.id}>{recipe.title}</Text>
          ))
        }
      </Box>
    </>
  );
}
