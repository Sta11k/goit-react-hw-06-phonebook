// import { Component } from 'react';
// import { connect } from 'react-redux';
import { useState } from 'react';
import s from './Form.module.css';

import { useSelector, useDispatch } from 'react-redux';
import { addContacts } from '../../redux/app/app-phonebook-actions';
import { getContacts } from '../../redux/app/app-phonebook-selector';

function Form() {
  const contacts = useSelector(getContacts);
  const dispatch = useDispatch();

  const onSubmit = (name, number, association) =>
    dispatch(addContacts(name, number, association));

  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const [association, setAssociation] = useState('Other');

  // const contactCheck = () => {

  //     const repeatName = contacts.reduce(
  //     (acc, contact) => [...acc, contact.name],
  //     [],
  //   );
  //   const repeatNumber = contacts.reduce(
  //     (acc, contact) => [...acc, contact.number],
  //     [],
  //   );

  //   if (repeatName.includes(name) || repeatNumber.includes(number)) {

  //    alert(`${name} ${number} is already `);
  //     return;
  //   }

  //   if (name === '' || number === '') {
  //     alert(`Enter data`);
  //     return;
  //   }

  // };

  const handleSabmit = e => {
    e.preventDefault();
    const repeatName = contacts.reduce(
      (acc, contact) => [...acc, contact.name],
      [],
    );
    const repeatNumber = contacts.reduce(
      (acc, contact) => [...acc, contact.number],
      [],
    );

    if (repeatName.includes(name) || repeatNumber.includes(number)) {
      alert(`${name} ${number} is already `);
      return;
    }

    if (name === '' || number === '') {
      alert(`Enter data`);
      return;
    }

    onSubmit(name, number, association);
    setName('');
    setNumber('');
    setAssociation('Other');
    //Дизпачим продукет в редакс
  };

  return (
    <form onSubmit={handleSabmit} className={s.m}>
      <h2 className={s.title}>Phonebook</h2>
      <label className={s.form__name}>
        Name
        <input
          // id={this.contactIdName}
          onChange={e => setName(e.currentTarget.value)}
          type="text"
          value={name}
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
        />
      </label>
      <label className={s.form__number}>
        Number
        <input
          // id={this.contactIdNumber}
          onChange={e => setNumber(e.currentTarget.value)}
          type="tel"
          value={number}
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
        />
      </label>

      <div className={s.radio__btn}>
        <label>
          <input
            type="radio"
            name="association"
            value="Work"
            onChange={e => setAssociation(e.currentTarget.value)}
            checked={association === 'Work'}
          />
          Work
        </label>
        <label>
          <input
            type="radio"
            name="association"
            value="Family"
            onChange={e => setAssociation(e.currentTarget.value)}
            checked={association === 'Family'}
          />
          Family
        </label>
        <label>
          <input
            type="radio"
            name="association"
            value="Friends"
            onChange={e => setAssociation(e.currentTarget.value)}
            checked={association === 'Friends'}
          />
          Friends
        </label>
        <label>
          <input
            type="radio"
            name="association"
            value="Other"
            onChange={e => setAssociation(e.currentTarget.value)}
            checked={association === 'Other'}
          />
          Other
        </label>
      </div>
      <button type="submit">Add contacts</button>
    </form>
  );
}

export default Form;

// class Form extends Component {
//   state = {
//     // contacts: [],
//     id: '',
//     name: '',
//     number: '',
//     association: 'Other',
//   };

//   contactIdName = uuid();
//   contactIdNumber = uuid();

//   handleChange = e => {
//     console.log(e.currentTarget.value);
//     // const contactId = uuid();
//     const { name, value } = e.currentTarget;
//     this.setState({ [name]: value });
//     // this.setState({ id: contactId });
//   };

//   handleSabmit = e => {
//     e.preventDefault();
//     const contactId = uuid();
//     const { name, number, association } = this.state;
//     const contactItem = {
//       id: contactId,
//       name,
//       number,
//       association,
//     };
//     this.setState({ contactItem }); //для себя пишем новий обект продукта

//     this.props.onAdd(contactItem); //Дизпачим продукет в редакс
//     this.resetForm();
//   };

//   resetForm = () => {
//     this.setState({ id: '', name: '', number: '', association: 'Other' });
//   };

//   render() {
//     return (
//       <form onSubmit={this.handleSabmit} className={s.m}>
//         <h2 className={s.title}>Phonebook</h2>
//         <label htmlFor={this.contactIdName} className={s.form__name}>
//           Name
//           <input
//             id={this.contactIdName}
//             onChange={this.handleChange}
//             type="text"
//             value={this.state.name}
//             name="name"
//             pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
//             required
//           />
//         </label>
//         <label htmlFor={this.contactIdNumber} className={s.form__number}>
//           Number
//           <input
//             id={this.contactIdNumber}
//             onChange={this.handleChange}
//             type="tel"
//             value={this.state.number}
//             name="number"
//             pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
//             title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
//             required
//           />
//         </label>

//         <div className={s.radio__btn}>
//           <label>
//             <input
//               type="radio"
//               name="association"
//               value="Work"
//               onChange={this.handleChange}
//               checked={this.state.association === 'Work'}
//             />
//             Work
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="association"
//               value="Family"
//               onChange={this.handleChange}
//               checked={this.state.association === 'Family'}
//             />
//             Family
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="association"
//               value="Friends"
//               onChange={this.handleChange}
//               checked={this.state.association === 'Friends'}
//             />
//             Friends
//           </label>
//           <label>
//             <input
//               type="radio"
//               name="association"
//               value="Other"
//               onChange={this.handleChange}
//               checked={this.state.association === 'Other'}
//             />
//             Other
//           </label>
//         </div>
//         <button type="submit">Add contacts</button>
//       </form>
//     );
//   }
// }

// const mapDispatchToProps = dispatch => {
//   // console.log("dispatch", dispatch);
//   return {
//     onAdd: contactR => dispatch(addContacts(contactR)),
//   };
// };
// export default connect(null, mapDispatchToProps)(Form);
