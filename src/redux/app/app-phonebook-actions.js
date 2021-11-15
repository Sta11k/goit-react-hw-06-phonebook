export const addContacts = contactLst => ({
  type: 'contacts/add',
  payload: contactLst,
});

export const deleteContacts = id => ({
  type: 'contacts/delete',
  payload: { id },
});

export const changeFilter = value => ({
  type: 'filter/value',
  payload: value,
});
