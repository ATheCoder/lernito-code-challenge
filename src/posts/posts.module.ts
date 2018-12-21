import { Module } from '@nestjs/common'
import { PostsResolvers } from './posts.resolvers'
import { PostsService } from './posts.service'
import { CommentsModule } from '../comments/comments.module'

@Module({
    imports: [CommentsModule],
    providers: [PostsResolvers, PostsService]
})

export class PostsModule {}