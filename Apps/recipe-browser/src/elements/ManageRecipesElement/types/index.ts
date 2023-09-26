import { Recipe } from '../../../types';

export interface RecipeData {
  id: string;
  title: string;
  description: string;
  recipes: Recipe[];
}
