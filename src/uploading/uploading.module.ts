import { Module, MulterModule } from '@nestjs/common'
import { UploadingController } from './uploading.controller'
import { diskStorage } from 'multer'
import { extname } from 'path'

@Module({
    imports: [MulterModule.registerAsync({
        useFactory: () => ({
            storage: diskStorage({
                destination: '/uploads',
                filename: (req, file, cb) => {
                    const randomName = Array(32).fill(null).map(() => (Math.round(Math.random() * 16)).toString(16)).join('')
                    cb(null, `${randomName}${extname(file.originalname)}`)
                }
            })
        })
    })],
    controllers: [UploadingController]
})

export class UploadingModule {}