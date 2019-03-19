import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tweet: ''
    };
  }

  handleChange(e){
    this.setState({
      tweet: e.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.tweet} onChange={e =>this.handleChange(e)}/>
        {this.props.maxChars-this.state.tweet.length}
      </div>
    );
  }
}

export default TwitterMessage;
