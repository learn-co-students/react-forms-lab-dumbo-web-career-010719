import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: ""
    };
  }

  handleChange = (e) => {
    console.log(e.target.value);
    this.setState({
      message: e.target.value
    })
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <strong>Your message:</strong>
        <input
          type="text"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <div>{this.props.maxChars - this.state.message.length} characters left</div>
      </div>
    );
  }
}

export default TwitterMessage;
