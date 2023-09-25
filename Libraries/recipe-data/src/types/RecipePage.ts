import { ObjectType } from 'type-graphql';
import { Recipe } from '../entities';
import { Page } from '../generics';

@ObjectType()
export class RecipePage extends Page(Recipe) {
}
