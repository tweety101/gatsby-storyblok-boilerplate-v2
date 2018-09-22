import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'
import Dropmenu2 from './dropmenu2'
import Hamburger from './hamburger'
import Languagetoggler from './languagetoggler'




class Header extends React.Component {
  constructor() {
    super();

    this.hamburgerclickHandler = this.hamburgerclickHandler.bind(this);
    this.handleOutsideClick = this.handleOutsideClick.bind(this);

    this.state = {
      hamburgeropen: false
    };
}

  hamburgerclickHandler = () => {
    if (!this.state.hamburgeropen) {
      // attach/remove event handler
      document.addEventListener('mousedown', this.handleOutsideClick, false);
  } else {
      document.removeEventListener('mousedown', this.handleOutsideClick, false);
  }


    this.setState(prevState => ({
      hamburgeropen: !prevState.hamburgeropen,
  }));
  }
  
  handleOutsideClick(e) {
    if (this.node.contains(e.target)) {
      return;
  }

  this.hamburgerclickHandler();
}
  

  render() {
    let menudisplay = "none";
    (this.state.hamburgeropen) === true ? menudisplay = "block" : menudisplay = "none"; const myurl = this.props.myurl;
    console.log(this.props);
    return (
      <div className={css`
        background: white;
        border: none;
        `}>
        <div className={css`
          margin: 0 auto;
          max-width: 1200px;
          padding: 1.45rem 1.08rem;
          display:flex;
          justify-content: space-between;
          `}>
          <div className={css`
          width:100px;
        `}>
            <Link
              to="/"
              style={{
                color: 'grey',
                textDecoration: 'none',
              }}
            >{this.props.siteTitle}
            </Link>
          </div>
          <div
          ref={node => { this.node = node; }}>
            <div
              className={css`
            display: flex;
            justify-content: center;
            @media (min-width: 500px) {
            display: none;
        }
        
        `}
              onClick={this.hamburgerclickHandler}>
              <Hamburger />
            </div>
            <div className={css`
          display: flex;
          @media(max-width: 500px){
            display:${menudisplay};
          }
          `}>
              {('menu_groups' in this.props.settings) === true ? this.props.settings.menu_groups.map(group => (
                <Dropmenu2
                  key={group._uid}
                  data={group}
                  clicked={this.hamburgerclickHandler}
                />
              )) :
                <div>no menu to show</div>}
            </div>
            </div>
            <Languagetoggler
            myurl={this.props.myurl}/>
          
        </div>
      </div>
    )
  }
}


export default Header
