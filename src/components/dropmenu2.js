import React from 'react'
import { Link } from 'gatsby'
import { css } from 'emotion'



class Dropmenu2 extends React.Component {
    constructor() {
        super();

        this.handleClick = this.handleClick.bind(this);
        this.handleOutsideClick = this.handleOutsideClick.bind(this);

        this.state = {
            popupVisible: false
        };
    }

    handleClick() {
        if (!this.state.popupVisible) {
            // attach/remove event handler
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }

        this.setState(prevState => ({
            popupVisible: !prevState.popupVisible,
        }));
    }

    handleOutsideClick(e) {
        // ignore clicks on the component itself
        if (this.node.contains(e.target)) {
            return;
        }

        this.handleClick();
    }

    render() {
        let display = "";
        (this.state.popupVisible === true) ? display = "block" : display = "none";
        return (
            <div className={css`
            margin:20px 0;
            &:hover {
                background: grey;
            }
            `} ref={node => { this.node = node; }}>
                <button
                    onClick={this.handleClick}
                >
                    {this.props.data.header}
          </button>
                <div className={css`
                display: ${display};
                position: relative;
                @media(min-width: 500px) {
                    position: absolute;
                    z-index: 5;
                }
                `}>
                    {('links' in this.props.data) === true ? this.props.data.links.map(lnk => (
                        <div
                        onClick={this.handleClick}
                        key={lnk._uid}>
                            <Link
                            className={css`
                            display: block;
                            padding: 10px;
                            &:hover{
                                background: rgb(220, 222, 226);
                            }
                    `}
                            to={lnk.link.cached_url}>
                            {lnk.display_name}
                        </Link>
                        </div>
                    )) :
                        <p>no links to display</p>}
                </div>
            </div>
        );
    }
}

export default Dropmenu2;