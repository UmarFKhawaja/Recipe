import { query, types, alias } from 'typed-graphqlify';

export const getRecipesQuery = () => query('GetRecipes', {
  [alias('getRecipes', 'getUser')]: {
    id: types.string,
    displayName: types.string,
    userName: types.string,
    emailAddress: types.string,
    recipes: {
      id: types.string,
      title: types.string,
      description: types.string
    }
  }
});
