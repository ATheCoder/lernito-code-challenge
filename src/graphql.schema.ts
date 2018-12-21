export class Comment {
    id?: number;
    postId?: number;
    text?: string;
}

export class Post {
    id?: number;
    senderName?: string;
    text?: string;
    pictureURL?: string;
}

export abstract class IQuery {
    abstract getCommentsOfPost(postId?: number): Comment[] | Promise<Comment[]>;

    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
