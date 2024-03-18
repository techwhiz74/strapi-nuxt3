export const cookieListQuery = `
query {
    cookieCategories {
      data {
        attributes {
          name
          description
          cookies {
            data {
              attributes {
                name
                description
                host
                party
                isVisible
                duration
              }
            }
          }
        }
      }
    }
  }
`
