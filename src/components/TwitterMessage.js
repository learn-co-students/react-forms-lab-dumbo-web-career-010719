import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: ""
    };
  }

  updateState = (event) =>{
    this.setState({
      value: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" onChange={this.updateState} value = {this.state.value} name="value"/>
        {this.props.maxChars - this.state.value.length}
      </div>
    );
  }
}

export default TwitterMessage;
