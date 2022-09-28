import React, { useState } from "react";
import TodoContext from "./TodoContext";
import PropTypes from 'prop-types';

function TodoProvider({ children }) {
  const [items, setItems] = useState([]);

  const context = {
    items,
    setItems
  };

  return (
    <TodoContext.Provider value={context}>
      {children}
    </TodoContext.Provider>
  )

}

TodoProvider.propTypes = {
  children: PropTypes.node
}.isRequired;

export default TodoProvider;