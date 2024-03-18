export const settingsQuery = `
query {
    globalSetting {
        data {
          attributes {
            GA4PropertyID
            PrimaryColor
            SecondaryColor
            linkedinLink
            twitterLink
            facebookLink
            instagramLink
            Address
            logo {
              data {
                attributes {
                  url
                  width
                  height
                  alternativeText
                  hash
                  ext
                }
              }
            }
          }
        }
      }
  }`