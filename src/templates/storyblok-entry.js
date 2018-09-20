import React from 'react'
import Components from '../components/components.js'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class StoryblokEntry extends React.Component {
  constructor(props) {
    super(props)
    let story = Object.assign({}, props.pageContext.story)
    story.content = JSON.parse(story.content)
    this.state = { story: story }
  }

  render() {
    let content = this.state.story.content
    let myurl = this.props.location.pathname
    let langsettings = JSON.parse(this.props.data.storyblokEntry.content)
    console.log(langsettings)
    return (
      <Layout
        settings={langsettings}
        myurl={myurl}>
        {React.createElement(Components[content.component], { key: content._uid, blok: content })}
      </Layout>
    )
  }
}

export default StoryblokEntry

export const query = graphql`
  
  query Storyblokquery ($lang: String!) {
  storyblokEntry (full_slug: {eq: $lang}) {
    name
    content
  }
}
`
