import { Injectable, Inject } from '@nestjs/common'
import { Comment } from '../graphql.schema'
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
const Comments = require('./commentExamples.json')

@Injectable()
export class CommentsService {
    constructor(@InjectModel('Comment') private readonly commentModel: Model<Comment>) {}

    // getCommentsOfPost(postId: string): Comment[] {
    //     return Comments.filter((comment) => {
    //         return comment.postId === postId
    //     })
    // }

    async getCommentsOfPost(postId: string): Promise<Comment[]> {
        return await this.commentModel.find({postId: postId}).exec()
    }
}