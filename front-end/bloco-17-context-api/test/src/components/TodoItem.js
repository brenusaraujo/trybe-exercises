import React, { useContext, useState } from 'react';
import TodoContext from '../context/TodoContext';

function TodoItem() {
  const {
    items,
    setItems
  } = useContext(TodoContext);
  const [line, setLine] = useState(false);

  const handleRemove = (index) => {
    const list = [...items];
    list.splice(index, 1);
    setItems(list);
  }

  const handleComplete = () => {
    if(line){
      setLine(false);
    } 
    setLine(true);
    
  }

  return (
    <div className="singleTodoItem">
      {items.map((item, index) => (
        <div key={index}>
          <button
            className="markCompleteTodoItem"
            onClick={handleComplete}
          >
            Complete
          </button>
          <p
          style={line ? { textDecoration: 'line-through', color: 'green' } : { textDecoration: 'none' }}
          >
            {item}
          </p>
          <button
            className="removeTodoItem"
            onClick={() => handleRemove(index)}
          >
            X
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoItem;