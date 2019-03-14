import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  hanleFormSubmit = (event) =>{
    event.preventDefault()
    if(this.state.username && this.state.password){
      this.props.onSubmit(this.state)
    }
       
  }

  handleInputUserName =(event)=>{

    this.setState({
      username: event.target.value
    })
  }

  handleInputPassword =(event)=>{
    this.setState({
      password: event.target.value
    })
  }

  render() {
    return (
      <form onSubmit={(e)=>this.hanleFormSubmit(e)}>
        <div>
          <label>
            Username
            <input id="username" name="username" value={this.state.username} type="text" onChange={this.handleInputUserName} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" value={this.state.password} type="password" onChange={this.handleInputPassword}/>
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
