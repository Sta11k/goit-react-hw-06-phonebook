export const getContacts = state => state.contact;
export const getFilter = state => state.filter;

export const getVisibleContacts = state => {
  const contacts = getContacts(state);
  const filter = getFilter(state);
  const optimizedFilter = filter.toLowerCase();

  return contacts.filter(({ name }) =>
    name.toLowerCase().includes(optimizedFilter),
  );
};

//   const { filter } = state;
//   const optimizedFilter = filter.toLowerCase();

//   const vizibleCOntacts = state.contact.filter(contact =>
//     contact.name.toLowerCase().includes(optimizedFilter),
//   );

//   return { contactsOll: vizibleCOntacts };
