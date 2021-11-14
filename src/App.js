import './App.css';
import { Component } from 'react';
import Form from './components/Forms/Form';
import TodoList from './components/Todolist/Todolist';
import Filter from './components/Filter/Filter';
import { connect } from 'react-redux';
//import { addContacts, deleteContacts, contactFilter} from '../../redux/app/app-phonebook-actions';
// import { connect } from 'react-redux';
//import { contact, filter } from './redux/app/app-phonebook-reducer';
//  import { addContacts, deleteContacts } from './redux/app/app-phonebook-actions.js';
// import { v4 as uuid } from 'uuid';

class App extends Component {
  state = {
    contactsOll: [
      // {
      //   id: 'id-1',
      //   name: 'Rosie Simpson',
      //   number: '459-12-56',
      //   association: 'Other',
      // },
      // {
      //   id: 'id-2',
      //   name: 'Hermione Kline',
      //   number: '443-89-12',
      //   association: 'Other',
      // },
      // {
      //   id: 'id-3',
      //   name: 'Eden Clements',
      //   number: '645-17-79',
      //   association: 'Other',
      // },
      // {
      //   id: 'id-4',
      //   name: 'Annie Copeland',
      //   number: '227-91-26',
      //   association: 'Other',
      // },
    ],
    filter: '',
  };

  hendlerSubmitForm = ({ id, name, number, association }) => {
    // const contactId = uuid();
    const contact = {
      id,
      name,
      number,
      association,
    };
    // const contactRedux= this.props.onAdd(contact);
    // console.log("contactRedux",contactRedux)
    console.log('contact ', contact.name);
    this.state.contactsOll.some(el => el.name === contact.name)
      ? alert(`${contact.name} is already in contactsOll`)
      : this.setState(prevState => {
          return { contactsOll: [contact, ...prevState.contactsOll] };
        });
  };

  // deleteContact = contactId => {
  //   // console.log(contactId);
  //   this.setState(({ contactsOll }) => ({
  //     contactsOll: contactsOll.filter(contact => contact.id !== contactId),
  //   }));
  // };

  changeFilter = e => {
    this.setState({ filter: e.currentTarget.value });
  };

  getVisibleContacts = () => {
    const { contactsOll, filter } = this.state;
    const optimizedFilter = filter.toLowerCase();

    return contactsOll.filter(contact =>
      contact.name.toLowerCase().includes(optimizedFilter),
    );
  };

  render() {
    const { contactsOll, filter } = this.state;
    const visibleContacts = this.getVisibleContacts();
    console.log(contactsOll);

    return (
      <div className="App">
        <Form OnSubmit={this.hendlerSubmitForm} />
        {<Filter value={filter} onChange={this.changeFilter} />}

        <TodoList
          contactsOll={visibleContacts}
          // onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}

//  export default App;

const mapStateToProps = state => {
  console.log('store.contactProps', state.contactsOll);
  return {
    contactsOll: state.contact,
  };
};

// const mapDispatchToProps = dispatch => {

//   return {
//     onDeleteContact: id => dispatch(deleteContacts(id)),
//   };
// };
export default connect(mapStateToProps, null)(App);
// const mapStateToProps = dispatch => {

//   return {
//     onDeleteContact: id => dispatch(deleteContacts(id)),
//   };
// };

// export default connect(mapStateToProps, null)(App);
// const mapStateToProps = (store) => {
//   return {
//       contactProps: store.contact,

//   }
// };

// const mapDispatchToProps = (dispatch) => {
//   console.log("dispatch", dispatch);
//   return {
//     onAdd: (contact) => dispatch(addContacts(contact))

//   };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(App);
