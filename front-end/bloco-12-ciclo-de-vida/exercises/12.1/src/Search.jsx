import React from "react";

class Search extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      disable: true,
      artist: ''
    }
  }

  handleChange({ target }) {
    const { value } = target;
    if (value >= 2){
      this.setState({
        disable: false,
        artist: value
      });
    }
    return this.setState({ name: '', disabled: true })
  }

  handleSubmit() {

  }

  render() {
    const { disable } = this.props;
    return (
      <form >
        <input
          type="text"
          name="artist"
          data-testid="search-artist-input"
          onChange={this.handleChange}
          placeholder='Nome do Artista'
        />
        <button
          type="submit"
          data-testid="search-artist-button"
          disabled={disable}
          onClick={this.handleSubmit}
        >
          Pesquisar
        </button>

      </form>
    )
  }
}

export default Search;