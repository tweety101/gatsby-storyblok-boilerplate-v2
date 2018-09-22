import React from 'react'
import { Link } from 'gatsby'
import styled from 'react-emotion'
import Dropmenu from './dropmenu'



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

class Header extends React.Component {
  state = {
    open: null,
  }
  openHandler = (openid) => {
    if (openid === this.state.open) {
      var newopen = "null"
    }
    else {
      var newopen = openid
    }
    this.setState({
      open: newopen,
    })
    
  }
  closeHandler = () => {
    this.setState({
      open: null,
    })
  }

  render() {
    const open = this.state.open;
    const settings = this.props.settings;
    const myurl = this.props.myurl;
    console.log(this.props);
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
            {this.siteTitle}
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
        <Dropmenu
        id="0"
        open={open}
        openfunction={() => this.openHandler("0")}
        closefunction={this.closeHandler}/>
        <Dropmenu
        id="1"
        open={open}
        openfunction={() => this.openHandler("1")}
        closefunction={this.closeHandler}/>
        <Dropmenu
        id="2"
        open={open}
        openfunction={() => this.openHandler("2")}
        closefunction={this.closeHandler}/>
        <div>

          <Navlink
            to={myurl.replace("/cn", "/en")}
          >English</Navlink>
          <Navlink
            to={myurl.replace("/en", "/cn")}
          >Chinese</Navlink>
        </div>
      </Container>
    </Wrapper>
    )
  }
}


export default Header
