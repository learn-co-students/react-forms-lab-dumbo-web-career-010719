import React from "react";

class TwitterMessage extends React.Component {
  state = {
      tweet:"",
    };

  handleType=(event)=>{
    event.preventDefault
    this.setState({
      tweet:event.target.value,
    })
  }
  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={this.handleType}/>
        {this.props.maxChars-this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
