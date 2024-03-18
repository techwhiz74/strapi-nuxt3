export default [
    { UserAgent: '*' },
    { Disallow: '/' },
    { BlankLine: true },
    // { Comment: 'Comment here' },
    // TODO: add sitemap url
    { Sitemap: (req) => `https://devs.wearepf.com/sitemap.xml` }
  ]
  