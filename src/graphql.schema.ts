export class Post {
    id?: number;
    senderName?: string;
    text?: string;
    pictureURL?: string;
}

export abstract class IQuery {
    abstract getPosts(): Post[] | Promise<Post[]>;

    abstract temp__(): boolean | Promise<boolean>;
}
