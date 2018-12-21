import {Module} from '@nestjs/common'
import {CommentsService} from './comments.service'
import {CommentsResolvers} from './comments.resolvers'

@Module({
    providers: [CommentsService, CommentsResolvers],
    exports: [CommentsService]
})

export class CommentsModule {}