import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import './Navigation.css'

// Redux
import { connect } from 'react-redux'
import CreatePost from '../CreatePost/CreatePost'
import { logoutUser} from '../../redux/actions/userAction';

class Navigation extends Component {

    handleLogout = () =>{
      this.props.logoutUser();
    }

  render () {
    return (
      <div>
        <nav className='navbar navbar-dark Nav-bg navbar-expand-md fixed-top'>
          <NavLink to='/' className='navbar-brand Content-color'>
            KnowledgeHub
          </NavLink>
          <button
            className='navbar-toggler'
            data-toggle='collapse'
            data-target='#navbar-menu'
          >
            <span className='navbar-toggler-icon' />
          </button>
          <div className='collapse navbar-collapse' id='navbar-menu'>
            <ul className='navbar-nav ml-auto'>
              {this.props.authenticated ? (
                <Fragment>
                  <li className='nav-item mr-3'>
                    <NavLink className='nav-link' to='/'>
                      <i className='fas fa-home fa-lg' />
                    </NavLink>
                  </li>
                  <li className='nav-item mr-3'>
                    <NavLink to='/'>
                      <CreatePost />
                    </NavLink>
                  </li>
                  <li className='nav-item mr-3'>
                    <NavLink className='nav-link' to='/'>
                      <i className='fas fa-bell fa-lg' />
                    </NavLink>
                  </li>
                  <li className='nav-item mr-3'>
                    <NavLink className='nav-link' to='/'>
                      <i className='fas fa-sign-out-alt' onClick={this.handleLogout}/>
                    </NavLink>
                  </li>
                </Fragment>
              ) : (
                <Fragment>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/'>
                      <i className='fas fa-home fa-lg' />
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/login'>
                      Ligin
                    </NavLink>
                  </li>
                  <li className='nav-item'>
                    <NavLink className='nav-link' to='/signup'>
                      Signup
                    </NavLink>
                  </li>
                </Fragment>
              )}
            </ul>
          </div>
        </nav>
        <div className='mt-5' />
      </div>
    )
  }
}

const mapActionsToProps = { logoutUser}

const mapStateToProps = state => ({
  authenticated: state.user.authenticated
})

export default connect(mapStateToProps,mapActionsToProps)(Navigation)
