import { Field, InputType } from 'type-graphql';
import { UnitKey } from './UnitKey';

@InputType()
export class IngredientInput {
  @Field()
  description!: string;

  @Field()
  quantity!: number;

  @Field((type) => UnitKey)
  unit!: UnitKey;
}
