import './App.css';
import { Component } from 'react';
import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';
import Filter from './components/Filter/Filter';
import { connect } from 'react-redux';
class App extends Component {
  state = {
    contactsOll: [],
    filter: '',
  };

  render() {
    const { contactsOll } = this.state;
    // const visibleContacts = this.getVisibleContacts();
    console.log('contactsOll', contactsOll);

    return (
      <div className="App">
        <Form />

        <Filter />
        <TodoList />
      </div>
    );
  }
}

const mapStateToProps = state => {
  // console.log('store.contactProps', state.contactsOll);
  return {
    contactsOll: state.contact,
  };
};

export default connect(mapStateToProps, null)(App);
