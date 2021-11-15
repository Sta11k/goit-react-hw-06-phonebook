import { combineReducers } from 'redux';
// import { addContacts, deleteContacts } from './app-phonebook-actions';
const initState = [
  {
    id: 'id-1',
    name: 'Rosie Simpson',
    number: '459-12-56',
    association: 'Other',
  },
  {
    id: 'id-2',
    name: 'Hermione Kline',
    number: '443-89-12',
    association: 'Other',
  },
  {
    id: 'id-3',
    name: 'Eden Clements',
    number: '645-17-79',
    association: 'Other',
  },
  {
    id: 'id-4',
    name: 'Annie Copeland',
    number: '227-91-26',
    association: 'Other',
  },
];

const contactList = (state = initState, { type, payload }) => {
  // console.log('action.payload', action.payload);
  // console.log('state', state);
  switch (type) {
    case 'contacts/add':
      return [...state, payload];
    case 'contacts/delete':
      return state.filter(contact => contact.id !== payload.id);

    default:
      return state;
  }
};

const filter = (state = '', { type, payload }) => {
  switch (type) {
    case 'filter/value':
      return payload;
    default:
      return state;
  }
};

export const phonebookReducer = combineReducers({
  contact: contactList,
  filter,
});
