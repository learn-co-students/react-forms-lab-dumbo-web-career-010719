import React from "react";

class LoginForm extends React.Component {
  state={
    username: '',
    password: ''
  }

  handleUsername = (event) => {
    this.setState({
      username: event.target.value
    },console.log("username is updating"))
  }

  handlePassword = (event) => {
    this.setState({
      password: event.target.value
    },console.log("password is updating"))
  }

  handleSubmit = (event) => {
    event.preventDefault()
    if (!this.state.username || !this.state.password) return
    this.props.onSubmit(this.state)
    console.log("submitted!");
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleUsername}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handlePassword} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
