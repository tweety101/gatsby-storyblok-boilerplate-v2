import React from 'react'
import Components from '../components/components.js'
import { Link } from 'gatsby'
import Layout from '../components/layout'

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    let story = Object.assign({}, props.pageContext.story)
    let globalSettings = Object.assign({}, props.pageContext.globalSettings)
    story.content = JSON.parse(story.content)
    globalSettings.content = JSON.parse(globalSettings[0].node.content)
    this.state = {story: story, globalSettings: globalSettings}
  }

  render() {
    let content = this.state.story.content
    let settings = this.state.globalSettings.content
    let myurl = this.props.location.pathname
    console.log(settings.header_links)
    return (
      <Layout
      settings={settings}
      myurl={myurl}>
        {React.createElement(Components[content.component], {key: content._uid, blok: content})}
      </Layout>
    )
  }
}

export default StoryblokEntry
