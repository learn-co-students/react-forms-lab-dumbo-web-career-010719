import React, { Component } from 'react'
import LoginForm from "./components/LoginForm";
import TwitterMessage from "./components/TwitterMessage";

class App extends Component {
  state = {
    user: "",
    pass: ""
  }

  changeHandler = (e) => {
    console.log(this.state.user)
    switch(e.target.name){
      case "username": this.setState({user: e.target.value}); break;
      case "password": this.setState({pass: e.target.value}); break;
    }
  }

  login = ({ username, password }) => {
    console.log(`Logging in ${username} with password ${password}`);
  };

  render() {
    return (
      <div>

        <h1>
          <pre>LoginForm</pre>
        </h1>
        <LoginForm onSubmit={this.login} onChange={this.changeHandler} name={this.state.name} pass={this.state.pass}/>

        <h1>
          <pre>TwitterMessage</pre>
        </h1>
        <TwitterMessage maxChars={140} />



      </div>
    )
  }
}

export default App
