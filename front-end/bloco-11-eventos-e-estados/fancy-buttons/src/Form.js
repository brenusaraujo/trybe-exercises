import React, { Component } from 'react'




class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      estadoFavorito: '',
      idade: 0,
      nome: '',
      value: 'cocunut',
    };
  }

 
  handleChange(event) {
    this.setState({
      estadoFavorito: event.target.value,
      nome: event.target.value,
    });
  }
  handleChangeNumber() {
    this.setState((estadoAnterior, _props) => ({
      idade: estadoAnterior.idade + 1
    }));
  }
  handleSubmit(event) {
    this.setState({
      value: event.target.value
    });
    event.preventDefault();
  }

  render() {
    
    return (
      <div>
        <h1>formulario teste</h1>
        <form>
          <select id="estados" value={this.state.value} onChange={this.handleSubmit}> 
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">coconut</option>
            <option value="mango">mango</option>
          </select>
          <input type="number" name="numero" id="teste" value={this.state.idade} onChange={this.handleChangeNumber}/>
          <input type="text" name="nome" id="nome" value={this.state.nome} onChange={this.handleChange}/>
          <textarea name="text" id="textarea" cols="30" rows="10" value={this.state.estadoFavorito} onChange={this.handleChange}>

          </textarea>
        </form>
      </div>
    );
  }
}

export default Form;