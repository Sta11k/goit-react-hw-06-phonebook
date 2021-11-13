import { combineReducers } from 'redux';
import { addContacts, deleteContacts } from './app-phonebook-actions';
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

const contactList = (state = initState, action) => {
  console.log('action.payload', action.payload);
  console.log('state', state);
  switch (action.type) {
    case 'contacts/add':
      return [...state, action.payload];
      break;
    case 'deleteContacts':
      return state.filter(contact => contact.id !== action.payload.id);
      break;

    default:
      break;
  }
  console.log('state', state);
  return state;
};

const contactFilter = (state = '', action) => {
  return state;
};

export const phonebookReducer = combineReducers({
  contact: contactList,
  filter: contactFilter,
});
