export const blogQuery = `
query BlogsByURL($publicationState: PublicationState!, $url: String!) {
    blogs(publicationState: $publicationState, filters: { url: { eq: $url } }) {
      data {
        attributes {
          Title
          Description
          Content
          Image {
            data {
              attributes {
                url
                alternativeText
                width
                height
                formats
                hash
                ext
              }
            }
          }
          seo {
            metaTitle
            metaViewport
            metaRobots
            metaDescription
            keywords
            metaSocial {
              socialNetwork
              title
              description
              image {
                data {
                  attributes {
                    alternativeText
                    url
                    width
                    height
                  }
                }
              }
            }
          }
        }
      }
    }
  }`
  