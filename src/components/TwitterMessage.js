import React from "react";

class TwitterMessage extends React.Component {
  state = {
    message: "",
  }

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    })
  }

  render() {
    console.log(this.state.remainingChars)
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.message} name="message" onChange={this.handleMessage}/>
        <h3>{this.props.maxChars - this.state.message.length} remaining characters</h3>
      </div>
    );
  }
}

export default TwitterMessage;
