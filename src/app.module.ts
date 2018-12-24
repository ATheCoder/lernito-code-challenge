import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import { join } from 'path';
import { PostsModule } from './posts/posts.module'
import { CommentsModule } from './comments/comments.module'
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [PostsModule, CommentsModule, MongooseModule.forRoot('mongodb://arash5:helloworld123@ds243344.mlab.com:43344/lernito-coding-challenge'),
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      definitions: {
        path: join(process.cwd(), 'src/graphql.schema.ts'),
        outputAs: 'class'
      }
    })
  ]
})
export class AppModule {}
