import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      message: '',
    };
  }

  changeHandler = (event) => {
    this.setState({
      message: event.target.value

    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        {this.props.maxChars - this.state.message.length}
        <input type="text" name="message" value={this.state.message} onChange={this.changeHandler}/>
      </div>
    );
  }
}

export default TwitterMessage;
