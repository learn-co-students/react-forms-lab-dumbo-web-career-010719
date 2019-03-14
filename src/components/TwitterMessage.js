import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      value: '',
      inputCount: 140
    };
  }

  onChangeInput = (event) => {
    // console.log(typeof parseInt(event.target.value))
    this.setState({
        value: event.target.value,
        inputCount: this.props.maxChars - event.target.value.length
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.value} maxLength={`${this.props.maxChars}`} onChange={this.onChangeInput}/>
        <div>{this.state.inputCount}</div>
      </div>
    );
  }
}


export default TwitterMessage;
