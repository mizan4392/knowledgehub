import React, { Component } from 'react'
import './Signup.css'
// redux
import { connect } from 'react-redux'
import { signupUser } from '../../redux/actions/userAction'

class Signup extends Component {
  state = {
    email: '',
    password: '',
    confirmPassword: '',
    userName: '',
    errors: {}
  }
  componentWillReceiveProps (nextProps) {
    if (nextProps.UI.errors) {
      this.setState({ errors: nextProps.UI.errors })
    }
  }

  handleSubmit = e => {
    e.preventDefault()
    this.setState({ loading: true })

    let newUserData = {
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      userName: this.state.userName
    }
    this.props.signupUser(newUserData, this.props.history)
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  render () {
    return (
      <div className='bg container-fluid'>
        <div className='row'>
          <div className='col-md-4 col-sm-4 col-xs-12' />
          <div className='col-md-4 col-sm-4 col-xs-12'>
            <form className='form-container' onSubmit={this.handleSubmit}>
              <h1>User SignUp</h1>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  className='form-control'
                  type='text'
                  name='userName'
                  value={this.state.userName}
                  placeholder='user Name'
                  onChange={this.handleChange}
                />

                {this.state.errors.userName ? (
                  <span style={{ color: 'red' }}>
                    {this.state.errors.userName}
                  </span>
                ) : (
                  <span />
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputEmail1'>Email address</label>
                <input
                  className='form-control'
                  type='email'
                  name='email'
                  value={this.state.email}
                  placeholder='Email'
                  onChange={this.handleChange}
                />
                {this.state.errors.email ? (
                  <span style={{ color: 'red' }}>
                    {this.state.errors.email}
                  </span>
                ) : (
                  <span />
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  className='form-control'
                  type='password'
                  name='password'
                  value={this.state.password}
                  placeholder='Password'
                  onChange={this.handleChange}
                />
                {this.state.errors.password ? (
                  <span style={{ color: 'red' }}>
                    {this.state.errors.password}
                  </span>
                ) : (
                  <span />
                )}
              </div>
              <div className='form-group'>
                <label htmlFor='exampleInputPassword1'>Password</label>
                <input
                  className='form-control'
                  type='password'
                  name='confirmPassword'
                  value={this.state.confirmPassword}
                  placeholder='Confirm Password'
                  onChange={this.handleChange}
                />
              </div>
              <button type='submit' className='btn btn-success btn-block'>
                SignUp
              </button>
            </form>
          </div>
          <div className='col-md-4 col-sm-4 col-xs-12' />
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
})

export default connect(
  mapStateToProps,
  { signupUser }
)(Signup)
