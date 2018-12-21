import { Resolver, Query, Subscription, Args } from '@nestjs/graphql'
import {CommentsService} from './comments.service'

@Resolver('Comment')
export class CommentsResolvers {
    constructor(private readonly commentsService: CommentsService) {}

    @Query('getCommentsOfPost')
    async getCommentOfPost(@Args('postId') id: number) {
        return await this.commentsService.getCommentsOfPost(id)
    }
}