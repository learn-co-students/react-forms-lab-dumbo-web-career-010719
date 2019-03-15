import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: this.props.maxChars
    };
  }

  handleChange = (event) => {
    this.setState({
      message: event.target.value, //[event.target.name]
      maxChars: this.state.maxChars - 1
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.state.maxChars}</strong>
        <input type="text" name="message" value={this.state.message} onChange={this.handleChange}/>
      </div>
    );
  }
}

export default TwitterMessage;
