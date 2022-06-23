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
    this.state ={
      numeroDeCliques:0
    }
    this.handleClick1 = this.handleClick1.bind(this);
  }
   handleClick1() {
    this.setState((estadoAnterior, _props) => ({
      numeroDeCliques: estadoAnterior.numeroDeCliques + 1
    }));
  }

  render() {
    return (
      <div>
        <button onClick = { this.handleClick1 } >{this.state.numeroDeCliques} </button>
        
      </div>
    )
  }
}

export default App;
