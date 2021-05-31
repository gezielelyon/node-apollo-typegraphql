import {Field, ObjectType} from 'type-graphql';

@ObjectType()
class Video {
  @Field()
  title: String;

  @Field()
  description: String;

  @Field()
  category: String;
}

export { Video };