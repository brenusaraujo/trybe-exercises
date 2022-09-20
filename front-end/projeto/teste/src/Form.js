import React from 'react';

class Form extends React.Component {

  constructor(){
    super()
    this.state = {
      numeroDeCliques: 0,
      corAtual: '',
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


  render(){
    return(
      <div>
        <form action="" >
          <input type="text" data-testid="name-input"/>
          <textarea name="" id="" cols="30" rows="10" data-testid="attr1-input"></textarea>
          <input type="number" name="" id="" data-testid="attr2-input"/>
          <input type="number" name="" id="" data-testid="attr3-input"/>
          <input type="text" name="" id="" data-testid="image-input"/>
          <select name="" id="" data-testid="rare-input" >
            <option value="normal"></option>
            <option value="raro"></option>
            <option value="muito raro"></option>
          </select>
          <input type="checkbox" name="" id="" data-testid="trunfo-input"/>
        </form>
      </div>
    )
  }
}
export default Form;