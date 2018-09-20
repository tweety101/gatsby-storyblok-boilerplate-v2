const path = require('path')

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  return new Promise((resolve, reject) => {
    const storyblokEntry = path.resolve('src/templates/storyblok-entry.js')

    resolve(
      graphql(
        `{
          allStoryblokEntry {
            edges {
              node {
                id
                name
                created_at
                uuid
                slug
                full_slug
                content
                is_startpage
                parent_id
                group_id
              }
            }
          }
        }`
      ).then(result => {
        if (result.errors) {
          console.log(result.errors)
          reject(result.errors)
        }
        const entries = result.data.allStoryblokEntry.edges;
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].node.slug === "globalsettings") {
            enGlobalSetting = entries.splice(i,1)
          }
  } ;

  entries.forEach((entry, index) => {
    if (entry.node.full_slug.substring(0,3) == "en/") {
      createPage({
        path: `/${entry.node.full_slug}`,
        component: storyblokEntry,
        context: {
          story: entry.node,
          lang: "en/globalsettings"
        }
      })
    }
      else if (entry.node.full_slug.substring(0,3) == "cn/") {
        createPage({
          path: `/${entry.node.full_slug}`,
          component: storyblokEntry,
          context: {
            story: entry.node,
            lang: "cn/globalsettings"
          }
        })
      }
  })
      })
    )
  })
}
