import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/layout'

const IndexPage = (props) => (
  <Layout
  myurl={props.location.pathname}>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p><Link to="/page-2/">Go to page 2</Link></p>
    <p><Link to="/en">This link does work</Link></p>
  </Layout>
)

export default IndexPage
