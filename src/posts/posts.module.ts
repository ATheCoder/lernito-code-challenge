import { Module } from '@nestjs/common'
import { PostsResolvers } from './posts.resolvers'
import { PostsService } from './posts.service'
import { CommentsModule } from '../comments/comments.module'
import { MongooseModule } from '@nestjs/mongoose'
import { PostSchema } from './posts.schema'

@Module({
    imports: [MongooseModule.forFeature([{name: 'Post', schema: PostSchema}]) ,CommentsModule],
    providers: [PostsResolvers, PostsService]
})

export class PostsModule {}