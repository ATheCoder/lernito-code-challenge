import {Module} from '@nestjs/common'
import {CommentsService} from './comments.service'
import {CommentsResolvers} from './comments.resolvers'
import { MongooseModule } from '@nestjs/mongoose'
import { CommentSchema } from './comments.schema'

@Module({
    imports: [MongooseModule.forFeature([{name: 'Comment', schema: CommentSchema}])],
    providers: [CommentsService, CommentsResolvers],
    exports: [CommentsService]
})

export class CommentsModule {}