import { Injectable } from '@nestjs/common';
import { Post } from '../graphql.schema'
const Posts = require('./postExamples.json')

@Injectable()
export class PostsService {

    findAll(): Post[] {
        return Posts
    }
}