const Redux = require('redux');

const teste = (index) => ({
  type: '',
  index
})

const INITIAL_STATE = {
  colors: ['white', 'black', 'red', 'green', 'blue', 'yellow'],
  index: 0,
};
const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'NEXT_COLOR':
      return{
        ...state,
        index: state.index === state.colors.length - 1 ? 0 : state.index + 1,
      };

    case 'PREVIOUS_COLOR':
      return{
        ...state,
        index: state.index === 0 ? state.colors.length - 1 : state.index - 1,
      };

  
    default:
      return state;
  }

};

const store = Redux.createStore(reducer);

const previous = document.getElementById('previous');
const next = document.getElementById('next');

previous.addEventListener('click', ()=>{
 store.dispatch({type: 'PREVIOUS_COLOR'})
});

next.addEventListener('click', ()=>{
  store.dispatch({type: 'NEXT_COLOR'});
})

store.subscribe(()=>{
  const {colors, index} = store.getState();
  document.getElementById('value').innerHTML=colors[index];
  document.getElementById('container').style.backgroundColor=colors[index];
})

console.log(store.getState().colors);


