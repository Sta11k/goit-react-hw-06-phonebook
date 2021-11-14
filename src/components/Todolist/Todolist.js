import s from './Todolist.module.css';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  addContacts,
  deleteContacts,
} from '../../redux/app/app-phonebook-actions';
// import { Form } from '../Forms/Form';
// import { App } from '../../App';
// import React, { Component } from 'react';

function Todolist({ contactsOll, onDeleteContact }) {
  // console.log("contactProps",contactProps)
  return (
    <ul className={s.contacts__list}>
      {contactsOll.map(({ id, name, number, association }) => {
        return (
          <li key={id} className={s.item}>
            {' '}
            <p className={s.name__contact}>
              Association: {association} | <span> name: {name} | </span>
              <span>number: {number} |</span>
            </p>
            <button
              className={s.btn}
              type="button"
              onClick={() => onDeleteContact(id)}
            >
              {' '}
              DELETE contact
            </button>
          </li>
        );
      })}
    </ul>
  );
}
// export default Todolist;

Todolist.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }),
  ),
  onDeleteContact: PropTypes.func.isRequired,
};

//  export default Form;

const mapStateToProps = state => {
  console.log('store.contactProps', state.contactProps);
  return {
    contactsOll: state.contact,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteContact: id => dispatch(deleteContacts(id)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Todolist);
