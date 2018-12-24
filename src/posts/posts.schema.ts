import * as mongoose from 'mongoose'

export const PostSchema = new mongoose.Schema({
    senderName: String,
    text: String,
    pictureURL: String
})