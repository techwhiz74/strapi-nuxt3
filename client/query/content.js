export const contentQuery = `
query PagesByURL($publicationState: PublicationState!, $url: String!) {
  pages(publicationState: $publicationState, filters: { url: { eq: $url } }) {
    data {
      attributes {
        Alert {
          Disabled
          text
          type
          Link {
            url
            text
            target
          }
        }
        Title
        Description
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
        
        pageZone {
          __typename
          ... on ComponentPagesHeader {
            id
            title
            subtitle
            nav {
              navtext
              navLink
            }
            startButton {
              text
              url
              target
              Disabled
              buttonIcon {
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
              email
            }
            contactButton {
              text
              url
              target
              Disabled
              buttonIcon {
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
              email
            }
            logo {
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
            animation {
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
          ... on ComponentPagesFooter {
            id
            social {
              title
              socialNetwork
              socialIcon {
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
              socialLink
            }
            logo {
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
            nav {
              navtext
              navLink
            }
            contact {
              contactInformation
              contactIcon {
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
            copywrite
            policy
            service
          }
          ... on ComponentPagesBanner {
            id
            Title
            Description
 						Disabled
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
            color
            CTA {
              text
              url
              target
              Disabled
              buttonIcon {
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
              email
            }
          }
          ... on ComponentPagesFeaturedList {
            id
            title
            subtitle
            contentList {
              Text
              Icon {
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
              svgLink
            }
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
            backgroundImage {
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
            subImage {
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
            imageMixcolor
          }
          ... on ComponentPagesVimeo {
            id
            EmbedCode
            Title
            Description
            media {
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
            contactButton {
              text
              url
              target
              Disabled
            }
          }
          ... on ComponentPagesProcess {
            title
            process {
              processNumber
              processTitle
              processText
            }
          }
          ... on ComponentPagesQuoteSlider {
            id
            title
            head
            Quote {
              author
              quote
              sliderHeadImage {
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
              sliderHeadSvg
              company
              color
              avatar {
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
            Disabled
          }
          ... on ComponentPagesFeaturedImageText {
            id
            title
            subtitle
            Description
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
            subImage {
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
            button {
              text
              url
              target
              Disabled
              buttonIcon {
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
      }
    }
  }
}`
