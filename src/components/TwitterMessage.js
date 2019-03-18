import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: "",
    counter: this.props.maxChars
  }

  changeHandler = (e) => {
    this.setState({
      message: e.target.value,
      counter: --this.state.counter
    })
  }

  render() {
    console.log(this.state.message);
    
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={(e) => this.changeHandler(e)} value={this.state.message}/>
        <p>Characters Left: {this.state.counter}</p>
      </div>
    );
  }
}

export default TwitterMessage;
