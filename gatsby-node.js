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
        let enGlobalSetting = [];
        let cnGlobalSetting = [];
        for (let i = 0; i < entries.length; i++) {
          if (entries[i].node.full_slug === "en/globalsettings") {
            enGlobalSetting = entries.splice(i,1)
          }
          else if (entries[i].node.full_slug === "cn/globalsettings") {
            cnGlobalSetting = entries.splice(i,1)
          }
  } ;

  console.log(entries);
  entries.forEach((entry, index) => {
    if (entry.node.full_slug.substring(0,3) == "en/") {
      createPage({
        path: `/${entry.node.full_slug}`,
        component: storyblokEntry,
        context: {
          globalSettings: enGlobalSetting,
          story: entry.node
        }
      })
    }
      else if (entry.node.full_slug.substring(0,3) == "cn/") {
        createPage({
          path: `/${entry.node.full_slug}`,
          component: storyblokEntry,
          context: {
            globalSettings: cnGlobalSetting,
            story: entry.node
          }
        })
      }
  })
      })
    )
  })
}
