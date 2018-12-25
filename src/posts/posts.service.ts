import { Injectable } from '@nestjs/common';
import { Post, AddPostInput } from '../graphql.schema';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'
const Posts = require('./postExamples.json')

@Injectable()
export class PostsService {
    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) {}

    // findAll(): Post[] {
    //     return Posts
    // }

    async findAll(): Promise<Post[]> {
        return await this.postModel.find().exec()
    }

    async addPost(newPost: AddPostInput): Promise<Post> {
        const createdPost = new this.postModel(newPost)
        return await createdPost.save()
    }
}