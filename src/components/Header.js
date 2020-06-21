import React from 'react'
import '../style.css'

class Header extends React.Component{
  render() {
    return (
      <div>
        <header className="navbar">Hello {this.props.username}</header>
      </div>
    )
  }
}


export default Header;