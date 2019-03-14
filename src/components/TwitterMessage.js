import React from "react";

class TwitterMessage extends React.Component {

  state={
    value: '',
    maxChars: this.props.maxChars
  }

  handleChange = event => {
    this.setState({
      value: event.target.value,
      maxChars: (this.state.maxChars - event.target.value.length)
    }, console.log(this.state.value, this.state.maxChars));
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text"
        value={this.state.value}
        onChange={this.handleChange}/>
        <label>Remaining characters: {this.state.maxChars} </label>
      </div>
    );
  }
}

export default TwitterMessage;
