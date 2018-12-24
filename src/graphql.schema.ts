export class Comment {
    id?: number;
    postId?: number;
    text?: string;
}

export class Post {
    id?: string;
    senderName?: string;
    text?: string;
    pictureURL?: string;
    numberOfComments?: number;
}

export abstract class IQuery {
    abstract getCommentsOfPost(postId?: number): Comment[] | Promise<Comment[]>;

    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
