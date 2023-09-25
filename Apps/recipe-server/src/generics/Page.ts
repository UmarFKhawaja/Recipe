import { ClassType, Field, Int, ObjectType } from 'type-graphql';
import { ObjectLiteral } from 'typeorm';

export function Page<T extends ObjectLiteral>(TClass: ClassType<T>) {
  @ObjectType()
  abstract class PageClass {
    constructor(
      items: T[],
      skip: number,
      take: number,
      count: number,
      hasMore: boolean
    ) {
      this.items = items;
      this.skip = skip;
      this.take = take;
      this.count = count;
      this.hasMore = hasMore;
    }

    @Field((type) => [TClass])
    items: T[];

    @Field((type) => Int)
    skip: number;

    @Field((type) => Int)
    take: number;

    @Field((type) => Int)
    count: number;

    @Field()
    hasMore: boolean;
  }

  return PageClass;
}
