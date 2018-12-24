import * as mongoose from 'mongoose'

export const CommentSchema = new mongoose.Schema({
    postId: String,
    text: String,
})