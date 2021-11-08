import React, {Component} from 'react';
import './App.css';
//import문은 본인 컴퓨터의 리액트 환경에 맞게 설정해주세요!!

class App extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      op1 : Math.floor(Math.random() * 9) + 1,
      op2 : Math.floor(Math.random() * 9) + 1,
      value : '',
      result : ''
    };
  }

  onSubmit = function(e) {
    if(this.state.value == this.state.op1 * this.state.op2) {
      this.setState({
        result : 'Correct!',
        op1 :  Math.floor(Math.random() * 9) + 1,
        op2 :  Math.floor(Math.random() * 9) + 1,
        value:''
      });
      this.input.focus();
    }      
    else {
      this.setState({
        result: this.state.value = 'Incorrect!',
        valu: ''
      });

      this.input.focus();
    }    

  }.bind(this);

  onChange = function(e) {
    this.setState({value:e.target.value});
  }.bind(this);
  input;

  render() {
    return(
      <div id = "App">
        <h2>{this.state.op1} * {this.state.op2} = ?</h2>
        <form onSubmit={this.onSubmit}>
          <input id = "input1" ref = {(c)=>{this.input = c}} type="number" value={this.state.value} 
          onChange={this.onChange}></input>
          <button id = "input2" type = "submit">입력</button>
        </form>
        <h2>{this.state.result}</h2>
     </div>
    );
  }
}
export default App;
