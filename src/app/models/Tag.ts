export class Tag{
  TagId: number
  Name: string
  UrlSlug: string
  Description: string
  Count: number
  constructor(tagId: number, name: string, urlSlug: string, description: string, count: number) {
    this.TagId = tagId,
      this.Name = name,
      this.UrlSlug = urlSlug,
      this.Description = description,
      this.Count = count
  }
}
