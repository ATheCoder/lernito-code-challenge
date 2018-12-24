import { Controller, Post, UseInterceptors, FileInterceptor, UploadedFile } from '@nestjs/common'

@Controller('upload')
export class UploadingController {
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file){
        file
    }
}