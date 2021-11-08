const React = require('react');
const { Component } = React;
//const ReactDom = require('react-dom');


class WordRelay extends Component {
  state = {
    word: '문정훈',
    value: '',
    result: '',
  };

  onSubmitForm = (e)=>{
    e.preventDefault();
    if(this.state.word[this.state.word.length-1] === this.state.value[0]) {
      this.setState({
        result : '딩동댕',
        word: this.state.value, 
        value: '',
      });
      this.input.focus();
    }
    else {
      this.setState({ 
        result: '떙',
        value: '',
        
      });  
      this.input.focus();
    }
  }

  onChangeInput = (e) =>{
    this.setState({value: e.target.value});
  }

  input;

  onRefInput = (c) =>{
      this.input = c;
  }

  render() {
      return (
        <div id = "App">
          <h2>{this.state.word}</h2>
          <form onSubmit = {this.onSubmitForm}>
            <input id ="input1" ref = {this.onRefInput} value={this.state.value} onChange={this.onChangeInput}/>
            <button id = "input2">입력</button>
          </form>
          <h2>{this.state.result}</h2>
        </div>
      );

  }

}

module.exports = WordRelay;