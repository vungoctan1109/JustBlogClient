import { Tag } from "./Tag"

export class Post{
  postId: number
  Title: string
  ShortDescription: string
  PostContent: string
  UrlSlug: string
  Published: boolean
  CategoryId: number
  PostOn: Date
  TagId: Tag[]

  constructor(postId: number, title: string, shortDescription: string, postContent: string, urlSlug: string, published: boolean, categoryId: number) {
    this.postId = postId
    this.Title = title
    this.ShortDescription = shortDescription
    this.PostContent = postContent
    this.UrlSlug = urlSlug
    this.Published = published
    this.CategoryId = categoryId
    this.PostOn = new Date()
    this.TagId = []
  }
}
