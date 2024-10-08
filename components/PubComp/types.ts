export interface Publication {
    title: string,
    authors: string,
    year: string,
    paperURL: string,
    teaserURL: string,
    githubURL?: string,
    journal: string,
    demoURL?: string,
    [key: string]: any
}