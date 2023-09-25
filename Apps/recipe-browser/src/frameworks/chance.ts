import * as Chance from 'chance';
import { nanoid } from 'nanoid';
import { Recipe, RecipeRating } from '../types';

interface ChanceNanoIDMixin {
  nanoid(): string;
}

interface ChanceRecipeMixin {
  recipe(): Recipe;
}

const chance = new Chance() as Chance.Chance & ChanceNanoIDMixin & ChanceRecipeMixin;

const TASTES: string[] = [
  'Spicy',
  'Tangy',
  'Grilled',
  'Roasted',
  'Baked'
];

const MEATS: string[] = [
  'Beef',
  'Mutton',
  'Chicken',
  'Fish'
];

const STYLES: string[] = [
  'Fillets',
  'Bites',
  'Meatballs',
  'Strips',
  'Casserole'
];

const RATINGS: RecipeRating[] = [
  'outstanding',
  'unique',
  'default'
];

chance.mixin({
  'nanoid': () => {
    return nanoid(12);
  },
  'recipe': () => {
    const id: string = chance.nanoid();

    const title: string = [
      chance.pickone(TASTES),
      chance.pickone(MEATS),
      chance.pickone(STYLES)
    ]
      .join(' ');

    const slug: string = title
      .toLowerCase()
      .replace(' ', '-');

    const description: string = chance.paragraph();

    const rating: RecipeRating = chance.pickone(RATINGS);

    const authorName: string = [
      chance.first(),
      chance.last()
    ]
      .join(' ');

    const authorURL: string = chance.avatar();

    const headerURL: string = 'https://source.unsplash.com/random/200/?food';

    const contentURL: string = `/view/recipe/${id}/${slug}`;

    const recipe: Recipe = {
      id,
      title,
      slug,
      description,
      rating,
      authorName,
      authorURL,
      headerURL,
      contentURL
    };

    return recipe;
  }
});

export default chance;
