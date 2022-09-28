import React, { useState, useContext } from 'react';
import TodoContext from '../context/TodoContext';

function TodoForm() {
  const {
    setItems
  } = useContext(TodoContext);
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const handleClick = () => {
    setItems((prevState) => [...prevState, input]);
    setInput('');
  }


  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        className="itemInput"
        onChange={e => setInput(e.target.value)}
        value={input}
      />
      <button
        className="addItemButton"
        onClick={handleClick}
      >
        Add Item
      </button>
    </form>
  );
}

export default TodoForm;