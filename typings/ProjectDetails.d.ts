export type ProjectLanguageType =
  | 'typescript'
  | 'javascript'
  | 'webflow'
  | 'solidity'

export type ProjectDetailsType = {
  language: ProjectLanguageType
  id: string
  images: {
    thumbnail: string
    mobile: string
    desktop: string
  }
  title: string
  description: string
  libraries: string[]
  liveWebsite: undefined | string
  industry: string
}

export type LibraryDataType = {
  libraryFeatured: boolean
  id: string
  title: string
  image: {
    black: string | undefined
    white: string | undefined
  }
}
