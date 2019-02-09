import React, { Component } from 'react';

class PromptBox extends Component {
  constructor(props) {
    super(props);

    this.state = { term: '' };
  }


render () {
  return (
  <div className="promptbox">
    <input
      type='text'
      value = {this.state.term}
      onChange={ event => this.changeTerm(event.target.value)}
      />
    </div>
  );
  }

  changeTerm(string) {
    this.setState({term: string})
    this.props.changeString({string})
  }

}

export default PromptBox;
