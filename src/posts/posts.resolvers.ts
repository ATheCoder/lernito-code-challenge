import { Resolver, Query, Mutation, Args } from '@nestjs/graphql'
import { PostsService } from './posts.service'
import { CommentsService } from 'src/comments/comments.service';
import { Post, AddPostInput } from '../graphql.schema'

@Resolver('Post')
export class PostsResolvers {
    constructor(private readonly postsService: PostsService, private readonly commentsService: CommentsService) {}

    @Query('getPosts')
    async getAllPosts() {
        let postsWithoutCommentsInfo = await this.postsService.findAll()
        return await postsWithoutCommentsInfo.map(async (post) => {
            post.numberOfComments = (await this.commentsService.getCommentsOfPost(post.id)).length
            return post
        })
    }

    @Mutation('addPost')
    async addPost(@Args('addPostInput') newPost: Post) {
        let savedPost = await this.postsService.addPost(newPost)
        savedPost.numberOfComments = 0
        return savedPost
    }

}