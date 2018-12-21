import { Injectable } from '@nestjs/common';
import { Post } from '../graphql.schema'
const Posts = require('./postExamples.json')

@Injectable()
export class PostsService {
    private readonly posts: Post[] = Posts

    findAll(): Post[] {
        return this.posts
    }
}