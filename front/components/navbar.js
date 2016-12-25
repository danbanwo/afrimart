import React, {Component} from 'react';

const Navbar = React.createClass({

  displayNav() {
    let navBar = ['Categories', 'Groceries', 'Restaurants'];
    return navBar.map((link, idx) => {
      return  <li key={idx}>{link}</li>
    })
  },

  render() {
    return (
      <div className='ul-div'>
        <h2 key='afrimart' id='afrimart'>Afrimart</h2>
        <ul>
          {this.displayNav()}</ul>
      </div>
    )
  }
})

export default Navbar;
