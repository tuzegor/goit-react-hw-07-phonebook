import React from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { removeContact } from '../../store/contacts/items-slice';

import { useFetchContactsQuery } from '../../store/contacts/contactsApi';

export default function ContactList() {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.contacts.filter);

  const showFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  console.log(useFetchContactsQuery());

  return (
    <ul className={style.contactsList}>
      {showFilteredContacts().map(({ id, name, number }) => (
        <li className={style.item} key={id}>
          <span>
            {name}: {number}
          </span>
          <button
            className={style.deleteBtn}
            type="button"
            onClick={() => dispatch(removeContact(id))}
          >
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
}
