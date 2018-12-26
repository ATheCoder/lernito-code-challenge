import { Controller, Post, UseInterceptors, FileInterceptor, UploadedFile, Response } from '@nestjs/common'

@Controller('upload')
export class UploadingController {
    @Post()
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file, @Response() res){
        res.status(200).send(file.filename)
    }
}