import React, { Component } from 'react';
import LoginBox from './LoginBox'
import RegisterBox from './RegisterBox'

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoginOpen: true,
      isRegisterOpen: false
    }
  }

  showLoginBox(e) {
    console.log(e.target.value)
    this.setState({
      isLoginOpen:true,
      isRegisterOpen:false
    });
  }

  showRegisterBox() {
      this.setState({
        isRegisterOpen:true,
        isLoginOpen:false
      });
  }


  render(){
    return(
    <div className = "loginPage-Container">
        <div className ='box-controller'>
        <LoginBox />
        <RegisterBox />
        <form>
        <input
        placeholder="Username" />
        <input
        placeholder="Password" />
        <button type="button">Lets Go!</button>
        </form>
        </div>
    </div>
      )
  }
}


export default Login;

        // <div className ="box-container">
        //   {this.state.isLoginOpen && <LoginBox />}
        // </div>

