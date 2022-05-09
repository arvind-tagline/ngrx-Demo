export interface Post{
    id?: string;
    title: string;
    description: string;
}

export interface Posts{
    userId: number;
    id?: number;
    title: string;
    body: string;
}