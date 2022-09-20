const Redux = require('redux');
      const INITIAL_STATE = {
        colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
        index: 0,
      };
      const reducer = (state = INITIAL_STATE, action) => ({
        switch (action.type) {
          case 'white': 
            return state.colors[0];
          case 'black': 
            return state.colors[1];
          case 'red': 
            return state.colors[2];
          case 'green': 
            return state.colors[3];
          case 'blue': 
            return state.colors[4];
          case 'yellow': 
            return state.colors[5];
        
          default:
            return state;
        }
      })