import React, { Component } from 'react';
import { Redirect } from 'react-router-dom'
import LoginBox from './LoginBox'
import RegisterBox from './RegisterBox'
import axios from 'axios'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      newId: '',
      fireRedirect: false,
      toggleShow: false
    }
  }

  toggleLogin() {
    this.setState(prevState => ({
      toggleShow: !prevState.toggelShow
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
    axios.post('./login/login', {
      username: this.state.username,
      password: this.state.password
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
        <LoginBox onClick={this.toggleLogin}/>
        <RegisterBox />
        <div>
        {this.state.toggleShow&&
        <form>
        <input
        type="text"
        name="username"
        value={this.state.username}
        placeholder="Username"
        onChange={(e) => this.handleInputChange(e)} />
        <input
        type="text"
        name="password"
        value={this.state.password}
        placeholder="Password"
        onChange={(e) => this.handleInputChange(e)} />
        <button
        type="submit"
        onClick={(e) => this.handleSubmit(e)}>Lets Go!</button>
        </form>
      }
      </div>
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

