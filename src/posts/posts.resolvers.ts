import { Resolver, Query, Subscription } from '@nestjs/graphql'
import { PostsService } from './posts.service'

@Resolver('Post')
export class PostsResolvers {
    constructor(private readonly postsService: PostsService) {}

    @Query('getPosts')
    async getAllPosts() {
        return await this.postsService.findAll()
    }
}