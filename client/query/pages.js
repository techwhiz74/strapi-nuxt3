export const pagesQuery = `
query {
  pages {
    data {
      id
      attributes {
        Title
        url
      }
    }
  }
}`
