import React, { Component } from 'react';
import Confirmation from './confirmation-bar.js';
import Sidebar from './side-bar.js';
import PromptBox from './prompts.js';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      string: ''
    };
  }

  render() {
return (
    <body className="App">
      <div className='window'>
        <h1 className="title"> Project Braille Buddy </h1>
          <div className="row">
            <div className="column">
            <Sidebar />
            </div>
            <div className='column'>
              <div className='textbox'>
                  <div className='subtitle'> Enter Text Below </div>
                <PromptBox string={this.state.string} changeString={ (string) => this.setState(string)} />
                </div>
                <Confirmation stringCheck={this.state.string}/>
              </div>
              <div className="column">
                <div className='domino'>
                  Simulated Braille Buddy
                  <img className='buddy' src="https://i.imgur.com/3d21Jxh.png" />
                </div>
              </div>
          </div>
      </div>
    </body>
    );
  }
}

export default App;
