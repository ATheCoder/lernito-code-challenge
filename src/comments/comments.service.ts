import { Injectable } from '@nestjs/common'
import { Comment } from '../graphql.schema'
const Comments = require('./commentExamples.json')

@Injectable()
export class CommentsService {
    getCommentsOfPost(postId: number): Comment[] {
        return Comments.filter((comment) => {
            return comment.postId === postId
        })
    }
}