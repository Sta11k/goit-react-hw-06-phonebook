import React from 'react';
import ReactDOM from 'react-dom';
import 'modern-normalize/modern-normalize.css';
import './index.css';
import App from './App';
import { store } from './redux/store';
// import { myAction } from './redux/app/app-phonebook-actions';
import { Provider } from 'react-redux';
// console.log(store);
// console.log(store.getState());
// console.log(store.dispatch(myAction));
// store.dispatch(myAction);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
