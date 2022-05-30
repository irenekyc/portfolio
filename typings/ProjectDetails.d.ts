export type ProjectDetailsType = {
  images: {
    thumbnail: string
    mobile: string
    desktop: string
  }
  title: string
  description: string
  libraries: LibraryDateType[]
  liveWebsite: undefined | string
  industry: string
}

export type LibraryDateType = {
  title: string
  image: string
}
