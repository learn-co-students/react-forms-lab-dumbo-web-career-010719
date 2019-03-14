import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      count: 140,
      value: ''
    };
  }

  handleChange = (event) => {
    const value = event.target.value;
    
    this.setState({
      count: 140 - value.length,
      value: value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message: {this.state.value}</strong>
        <h2>{this.state.count}</h2>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
      </div>
    );
  }
}

export default TwitterMessage;
