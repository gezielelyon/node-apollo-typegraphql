import {Arg, Field, InputType, Mutation, Resolver, Query} from 'type-graphql';

import VideoSchema from './VideoSchema';
import {Video} from './Video';

@InputType()
class VideoInput {
  @Field()
  title: String;

  @Field()
  description: String;

  @Field()
  category: String;
}

@Resolver()
class VideoResover {
  @Mutation(() => Video)
  async createVideo(@Arg("videoInput") videoInput: VideoInput) {
    console.log(videoInput);
    const video = await VideoSchema.create(videoInput);
    return video;
  }

  @Query(() => [Video])
  async loadVideos () {
    const videos = await VideoSchema.find();
    return videos;
  }
}

export {VideoResover};