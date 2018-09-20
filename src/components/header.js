import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'


const Wrapper = styled('div')`
    background: rebeccapurple;
      border: none;


`
const Container = styled('div')`
    margin: 0 auto;
    max-width: 1200px;
    padding: 1.45rem 1.08rem;
    display:flex;
    justify-content: space-between;

`
const Branding = styled('div')`
    font-size: 20px;
`
const Navlink = styled(Link)`
    color: white;
    margin: 0 2rem;

`


const Header = ({ siteTitle, settings, myurl }) => {
  
  
  return(
  <Wrapper>
    <Container>
      <Branding>
        <Link
          to="/"
          style={{
            color: 'white',
            textDecoration: 'none',
          }}
        >
          {siteTitle}
        </Link>
      </Branding>
      <div>
        {(settings) === undefined ? "no links here" :
        
        settings.header_links.map(lnk => (
          <Navlink
          key={lnk.link.cached_url}
          to={lnk.link.cached_url}>{lnk.display_name}</Navlink>
        ))}
      </div>
      <div>

        <Navlink
        to={myurl.replace("/cn/", "/en/")}
        >English</Navlink>
        <Navlink
        to={myurl.replace("en/", "cn/")}
        >Chinese</Navlink>
        </div>
    </Container>
  </Wrapper>
)
        }

export default Header
