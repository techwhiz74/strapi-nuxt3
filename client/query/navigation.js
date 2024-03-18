export const menuQuery = `
query ($menuName: String!) {
  renderNavigation(
    navigationIdOrSlug: $menuName
    type: TREE
    menuOnly: false
  ) {
    id
    title
    path
    items {
      id
      title
      path
    }
  }
}`
  