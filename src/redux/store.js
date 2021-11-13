import { createStore, applyMiddleware } from 'redux';
import { phonebookReducer } from './app/app-phonebook-reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
export const store = createStore(
  phonebookReducer,
  composeWithDevTools(applyMiddleware()),
);

// const reducer = (
//   state = {
//     contacts: {
//       items: [],
//       filter: '',
//     },
//   },
//   action,
// ) => {
//   console.log('Логуємо ЕКШН', action);
//   return state;
// };

// const store = createStore(reducer, { a: 'початковий стан' });
// export default store;
