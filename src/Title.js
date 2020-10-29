import React from "react";

class Title extends React.Component {
  constructor() {
    super();
    this.state = { text: "uldl" };
  }
  //set the text
  onMouseover(e) {
    this.setState({
      text: `
    uplinkdownlink
    `
    });
  }
  //clear the text
  onMouseout(e) {
    this.setState({ text: "uldl" });
  }
  render() {
    const { text } = this.state;
    return (
      <div
        onMouseEnter={this.onMouseover.bind(this)}
        onMouseLeave={this.onMouseout.bind(this)}
        id="title"
      >
        {text}
      </div>
    );
  }
}

export default Title;
