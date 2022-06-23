import React from "react";
import './App.css';


// function handleClick2() {
//   console.log( 'Cliclou no botão 2' );
// }
// function handleClick3() {
//   console.log( 'Cliclou no botão 3' );
// }

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      numeroDeCliques: 0,
      corAtual: 'white',
    }
    this.handleClick1 = this.handleClick1.bind(this);
  }
   handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1,
    }));
    if(this.state.numeroDeCliques % 2===0) {
      this.setState((estadoAnterior, _props)=>({
        corAtual: 'green',
      }));
    } else{
      this.setState((estadoAnterior, _props)=>({
        corAtual: 'red',
      }));
    }
    console.log(this.state.corAtual);
  }

  render() {
    return (
      <div>
        <button onClick = { this.handleClick1 } style={{ backgroundColor: `${this.state.corAtual}`, color: 'white'} }>{this.state.numeroDeCliques} </button>
      </div>
    )
  }
}

export default App;
