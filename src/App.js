import './App.css';
import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';
import Filter from './components/Filter/Filter';
// import { Component } from 'react';
// import { useSelector } from 'react-redux';
// import { getVisibleContacts } from './redux/app/app-phonebook-selector';
// import { connect } from 'react-redux';
export default function App() {
  // const contacts = useSelector(getVisibleContacts);
  return (
    <div className="App">
      <Form />
      <Filter />
      <TodoList />
    </div>
  );
}

// class App extends Component {
//   state = {
//     contactsOll: [],
//     filter: '',
//   };

//   render() {
//     const { contactsOll } = this.state;
//     // const visibleContacts = this.getVisibleContacts();
//     console.log('contactsOll', contactsOll);

//     return (
//       <div className="App">
//         <Form />
//         <Filter />
//         <TodoList />
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {

//   return {
//     contactsOll: state.contact,
//   };
// };

// export default connect(mapStateToProps, null)(App);
