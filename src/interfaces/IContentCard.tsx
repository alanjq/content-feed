import { IComment } from "@/interfaces/IComment"

export interface IContentCard {
    id: string,
    image: string,
    title: string,
    subTitle: string,
    body: string,
    author: string,
    priority: number,
    publishDate: string,
    comments: IComment[]
    textData: string,
    metadata: any
}
