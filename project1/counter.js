import React from "react"
class Counter extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        count: 0
      };
    }
  
  
    incre() {
      this.setState({
        count: this.state.count + 1
      });
    };
    
    decre() {
      this.setState({
        count: this.state.count - 1
      });
    };
    render() {
      return (
  
     <div>
        <h1>The Count is:</h1>
        <button className='inc+' onClick={() => this.incre()}>Incrementing the count!</button>
        <button className='dec-' onClick={() => this.decre()}>Decrementing the count!</button>
        <h3>Current Count: {this.state.count}</h3>
    </div>
      );
    }
  };
  export default Counter;


