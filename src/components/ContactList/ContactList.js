import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { useDeleteContactMutation } from '../../store/contacts/contactsApi';

export default function ContactList({ contacts }) {
  const filter = useSelector(state => state.filter);

  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <ul className={style.contactsList}>
      {contacts &&
        showFilteredContacts().map(({ id, name, phone }) => (
          <li className={style.item} key={id}>
            <span>
              {name}: {phone}
            </span>
            <button
              className={style.deleteBtn}
              type="button"
              onClick={() => deleteContact(id)}
              disabled={isDeleting}
            >
              {isDeleting ? 'Deleting' : 'Delete'}
            </button>
          </li>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};
