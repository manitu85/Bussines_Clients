import React, { Component } from 'react'
import { Link } from 'react-router-dom'


export class AppNavbar extends Component {
  render() {
    return (
      <nav className='navbar navbar-expand-lg navbar-dark bg-primary'>
        <div className='container'>
          <Link
            to='/'
            className='navbar-brand'>
            Bussines Panel
          </Link>

          <button
            className='navbar-toggler'
            type='button'
            data-toggle='collapse'
            data-target='#navbarMain'
            aria-controls='navbarMain'
            aria-expanded='false'
            aria-label='Toggle navigation'>
            <span className='navbar-toggler-icon'></span>
          </button>

          <div className='collapse navbar-collapse' id='navbarMain'>
            <ul className='navbar-nav ml-auto'>
              <li className='nav-item active'>
                <Link to='/' className='nav-link'>Dashboard<span className='sr-only'>(current)</span></Link>
              </li>
              {/* <li className='nav-item'>
                <Link to='/' className='nav-link'>Features</Link>
              </li>
              <li className='nav-item'>
                <Link to='/' className='nav-link'>About</Link>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}

export default AppNavbar
