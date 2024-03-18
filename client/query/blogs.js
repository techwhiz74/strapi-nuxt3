export const blogsQuery = `
query Blogs($publicationState: PublicationState!) {
  blogs(publicationState: $publicationState) {
      data {
        id
        attributes {
          Title
          Description
          Content
          url
          Image {
            data {
              attributes {
                url
                width
                height
                alternativeText
                formats
                hash
                ext
              }
            }
          }
        }
      }
    }
}`