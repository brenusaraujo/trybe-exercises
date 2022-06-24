import React, { Component } from 'react'




class Form extends Component {
  constructor() {
    super();

    this.handleChange = this.handleChange.bind(this);
    this.handleChangeNumber = this.handleChangeNumber.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    this.state = {
      estadoFavorito: '',
      age: 0,
      name: '',
      valor: 'cocunut',
    };
  }

 
  handleChange({ target }) {

    const { name } = target;

    this.setState({
      [name]: target.value,
    });
  }
  handleChangeNumber({ target }) {
    const { age } = target
    this.setState({
      [age]: target.value + 1,
  });
  }
  handleSubmit({ target }) {
    const { valor } = target
    this.setState({
      [valor]: target.value,
    });
    target.preventDefault();
  }

  render() {
    const { age, name, estadoFavorito} = this.state;
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
          <input 
            type="number" 
            name="numero" 
            id="teste" 
            value={age} 
            onChange={this.handleChangeNumber}
          />
          <input 
            type="text" 
            name="name" 
            id="name" 
            value={name} 
            onChange={this.handleChange}
          />
          <textarea 
            name="text" 
            id="textarea" 
            cols="30" 
            rows="10" 
            value={estadoFavorito} 
            onChange={this.handleChange}>

          </textarea>
        </form>
      </div>
    );
  }
}

export default Form;