import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      email: '',
      firstname: '',
      lastname: '',
      newId: '',
      fireRedirect: false,
      toggleLogin: false,
      toggleRegister: true,
    }
  }

  toggleLogin() {
    this.setState(prevState => ({
      toggleLogin: !prevState.toggleLogin,
      toggleRegister: !prevState.toggleRegister
    }))
  }

  toggleRegister() {
    this.setState(prevState => ({
      toggleRegister: !prevState.toggleRegister,
      toggleLogin: !prevState.toggleLogin
    }))
  }

  handleInputChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]: value
    }))
  }

  handleSubmit(e) {
    e.preventDefault()
    axios.post('/auth/register', {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    }).then(res => {
      console.log('this is res.data.user: ', res)
      this.setState({
        newId: res.data.user.id,
        fireRedirect: true
      })
    })
  }

handleLogin(e) {
  e.preventDefault()
  axios.post('/auth/login', {
    username: this.state.username,
    password: this.state.password
  }).then(res => {
    console.log('this is rew in axios.post: ', res)
    if(res.data) {
      console.log('this is res.data.data.id', res.data.user.id)
      this.setState({
      newId: res.data.user.id,
      fireRedirect: true
      })
    }
  })
}

  render(){
    return(
    <div className = "loginPage-Container">
        <div className ='box-controller'>
        <button onClick={() => this.toggleLogin()}>Log In</button>
        {this.state.toggleLogin &&
        <div className = 'login-container'>
        <input
          type='text'
          name='username'
          value={this.state.username}
          placeholder='Username'
          required
          onChange={(e) => this.handleInputChange(e)}
          />
        <input
          type='password'
          name='password'
          value={this.state.password}
          placeholder='Password'
          required
          onChange={(e) => this.handleInputChange(e)}
          />
        <button
          onClick={(e) => this.handleLogin(e)}>
          Login
          </button>
      </div>
    }

        <button onClick={() => this.toggleRegister()}>Register</button>
        {this.state.toggleRegister &&

        <div className='register-container'>
        <input
          type='text'
          name='username'
          value={this.state.username}
          placeholder="Username"
          required
          onChange={(e) => this.handleInputChange(e)}
        />
        <input
          name='email'
          type='email'
          placeholder='Email'
          value={ this.state.email }
          onChange={(e) => this.handleInputChange(e)}
          required
        />
        <input
          type='password'
          name= 'password'
          value={this.state.password}
          placeholder='Password'
          required
          onChange={(e) => this.handleInputChange(e)}
        />
        <input
          name='firstname'
          type='text'
          placeholder='First Name'
          onChange={(e) => this.handleInputChange(e)}
          required
        />
        <input
          name='lastname'
          type='text'
          placeholder='Last Name'
          onChange={(e) => this.handleInputChange(e)}
          required
        />
        <button
          onClick={(e) => this.handleSubmit(e)}
        >
        REGISTER
        </button>
      </div>
    }
        {this.state.fireRedirect ? <Redirect push to={`/places/${this.state.newId}`} /> : ''}
        </div>
    </div>
      )
  }
}


export default Login;
