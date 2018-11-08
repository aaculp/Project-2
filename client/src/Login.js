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
      toggleRegister: false,
    }
  }

  toggleLogin() {
    this.setState(prevState => ({
      toggleLogin: !prevState.toggleLogin
    }))
    console.log(this.state.toggleLogin)
  }

  toggleRegister() {
    this.setState(prevState => ({
      toggleRegister: !prevState.toggleRegister
    }))
  }

  handleInputChange(e) {
    const name = e.target.name
    const value = e.target.value
    this.setState(prevState => ({
      [name]: value
    }))
  }

  async handleSubmit(e) {
    e.preventDefault()
    axios.post('http://localhost:3001/auth/register', {
      username: this.state.username,
      password: this.state.password,
      firstname: this.state.firstname,
      lastname: this.state.lastname,
      email: this.state.email
    }).then(res => {
      this.setState({
        newId: res.data.data.id,
        fireRedirect: true
      })
    })
  }


  render(){
    return(
    <div className = "loginPage-Container">
        <div className ='box-controller'>
        <button onClick={() => this.toggleLogin()}>Log In</button>
        {this.state.toggleLogin &&
        <div>
        <form
          method = 'POST'
          action='/auth/login'
        >
        <input
          type='text'
          name='username'
          // value={this.state.username}
          placeholder='Username'
          required
          // onChange={(e) => this.handleInputChange(e)}
          />
        <input
          type='text'
          name='password'
          // value={this.state.password}
          placeholder='Password'
          required
          // onChange={(e) => this.handleInputChange(e)}
          />
        <input
          type='submit'
          value='Log in!'
          // onClick={(e) => this.handleSubmit(e)}
          />
        </form>
      </div>
    }

        <button onClick={() => this.toggleRegister()}>Register</button>
        {this.state.toggleRegister &&
        <div>
        {/*<form
          method = 'POST'
          action = '/auth/register'
        >
        <input
          type='text'
          name='username'
          // value={this.state.username}
          placeholder="Username"
          required
          // onChange={(e) => this.handleInputChange(e)}
        />
        <input
          name='email'
          type='email'
          placeholder='email'
          required
        />
        <input
          type='text'
          name= 'password'
          // value={this.state.password}
          placeholder='Password'
          required
          // onChange={(e) => this.handleInputChange(e)}
        />
        <input
          name='firstname'
          type='text'
          placeholder='first name'
          required
        />
        <input
          name='lastname'
          type='text'
          placeholder='last name'
          required
        />
        <input
        type="submit"
         value = 'Register!'
        // onClick={(e) => this.handleSubmit(e)}>Lets Go!
        />
        </form> */}
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
          placeholder='email'
          value={ this.state.email }
          onChange={(e) => this.handleInputChange(e)}
          required
        />
        <input
          type='text'
          name= 'password'
          value={this.state.password}
          placeholder='Password'
          required
          onChange={(e) => this.handleInputChange(e)}
        />
        <input
          name='firstname'
          type='text'
          placeholder='first name'
          onChange={(e) => this.handleInputChange(e)}
          required
        />
        <input
          name='lastname'
          type='text'
          placeholder='last name'
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
        {this.state.fireRedirect
          ? <Redirect push to={`/places/${this.state.newId}`} />
          : ''}
        </div>
    </div>
      )
  }
}


export default Login;

        // <div className ="box-container">
        //   {this.state.isLoginOpen && <LoginBox />}
        // </div>

