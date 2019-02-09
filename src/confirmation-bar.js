import React, { Component } from 'react'

class Confirmation extends Component {
    constructor(props) {
      super(props);

      this.state = {message: ''}

    }

    checkNull() {
    if( this.props.stringCheck != null )
      {
        return (
           <div> {this.props.stringCheck} </div>
         );
      }
      return <div> </div>;
    }

    render() {

      return (

            <div className='confirmation' >
              {this.checkNull()}
              <div className='info-text'>
              <br />
                This box would interpret the input and <br />
                confirm that all characters entered are <br />
                acceptable> (A -> Z, 0 -> 9) <br />
                If correct, it would read back the entry <br/>
                 using a text-to-speech node package. <br />
                 On a failure it would tell the user to <br />
                 re-enter a valid input.
              </div>
            </div>
      );

    }


}

export default Confirmation;
