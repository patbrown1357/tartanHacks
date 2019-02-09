import React, { Component } from 'react';

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
      return(

        <div className='instructions'>
           <div className='subtitle'> What Happens </div>
          <ul>
              <li> The user enters text into box </li>
              <br />
              <li> Then the text is broken down and converted to an integer</li>
              <br />
              <li> The integer is then split into
                   seperate digits and interpreted
              </li>
              <br />
              <li> These digits trigger certain servos. Which
              spell each character in braille.</li>
              <br />
          </ul>
        </div>

      );
  }

}

export default Sidebar;
