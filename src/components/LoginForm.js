import React from "react";

class LoginForm extends React.Component {
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

  handleSubmit = event => {
    event.preventDefault()

    if (!this.state.username || !this.state.password) return

    this.props.onSubmit(this.state)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.user} onChange={this.changeHandler}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.pass} onChange={this.changeHandler}/>
          </label>
        </div>
        <div>
          <button type="submit" >Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
