import React,{Component} from 'react';



class LoginBox extends Component {

  constructor(props) {
    super(props);
    this.state = {};
  }

  submitLogin(e) {
    console.log(e.target.value)
  }

  render() {
    return (
      <button
      type="button"
      className="login-btn"
      onClick={this.submitLogin}>Login</button>
    );
  }
}

export default LoginBox
