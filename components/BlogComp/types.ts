export interface BlogPost {
    id: string, 
    title: string,
    authors: string,
    date: string,
    abstract: string, 
    tags: string[],
    [key: string]: any
}