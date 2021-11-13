export const addContacts = contactLst => ({
  type: 'contacts/add',
  payload: contactLst,
});

export const deleteContacts = id => ({
  type: 'contacts/delete',
  payload: { id },
});

// export const filterContacts = {
//   type: 'contacts/filter',
//   payload: " ",
// };
