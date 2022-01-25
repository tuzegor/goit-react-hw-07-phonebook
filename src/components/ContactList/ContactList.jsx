import React from 'react';
import PropTypes from 'prop-types';
import style from './ContactList.module.css';
import { useSelector } from 'react-redux';

import ContactListItem from "../ContactListItem/ContactListItem"

export default function ContactList({ contacts }) {
  const filter = useSelector(state => state.filter);


  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <ul className={style.contactsList}>
      {contacts &&
        showFilteredContacts().map((contact) => (
          <ContactListItem contact={contact}  key={contact.id}></ContactListItem>
        ))}
    </ul>
  );
}

ContactList.propTypes = {
  contacts: PropTypes.array,
};
