import { RecipeRating } from './RecipeRating';

export interface Recipe {
  id: string;
  title: string;
  slug: string;
  description: string;
  rating: RecipeRating;
  authorName: string;
  authorURL: string;
  headerURL: string;
  contentURL: string;
}
