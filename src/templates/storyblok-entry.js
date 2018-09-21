import React from 'react'
import Components from '../components/components.js'
import { Link } from 'gatsby'
import { graphql } from 'gatsby'
import Layout from '../components/layout'

class StoryblokEntry extends React.Component {

  render() {
    let content = JSON.parse(this.props.pageContext.story.content)
    let myurl = this.props.location.pathname
    let langsettings = JSON.parse(this.props.data.storyblokEntry.content)
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
