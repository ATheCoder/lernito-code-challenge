export class AddPostInput {
    senderName: string;
    text: string;
    pictureURL: string;
}

export class Comment {
    id?: number;
    postId?: string;
    text?: string;
}

export abstract class IMutation {
    abstract addPost(addPostInput: AddPostInput): Post | Promise<Post>;
}

export class Post {
    id: string;
    senderName: string;
    text: string;
    pictureURL: string;
    numberOfComments: number;
}

export abstract class IQuery {
    abstract getCommentsOfPost(postId?: string): Comment[] | Promise<Comment[]>;

    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
