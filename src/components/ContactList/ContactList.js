import React from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import {
  useFetchContactsQuery,
  useDeleteContactMutation,
} from '../../store/contacts/contactsApi';

export default function ContactList() {
  const filter = useSelector(state => state.filter);
  const { data: contacts } = useFetchContactsQuery();
  console.log(contacts);

  const [deleteContact] = useDeleteContactMutation();

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
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
