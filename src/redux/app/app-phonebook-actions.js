import { createAction } from '@reduxjs/toolkit';
import { v4 as uuid } from 'uuid';
const contactId = uuid();

export const addContacts = createAction(
  'contacts/add',
  (name, number, association) => ({
    payload: {
      id: contactId,
      name,
      number,
      association,
    },
  }),
);
export const deleteContacts = createAction('contacts/delete');
export const changeFilter = createAction('filter/value');

// export const addContacts = contactLst => ({
//   type: 'contacts/add',
//   payload: contactLst,
// });

// export const deleteContacts = id => ({
//   type: 'contacts/delete',
//   payload: { id },
// });

// export const changeFilter = value => ({
//   type: 'filter/value',
//   payload: value,
// });
