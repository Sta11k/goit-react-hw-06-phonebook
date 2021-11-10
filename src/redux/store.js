import { createStore } from 'redux';

const reducer = (
  state = {
    contacts: {
      items: [],
      filter: '',
    },
  },
  action,
) => {
  console.log('Логуємо ЕКШН', action);
  return state;
};

const store = createStore(reducer, { a: 'початковий стан' });
export default store;
