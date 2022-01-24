import React from 'react';
import style from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
// import { removeContact } from '../../store/contacts/items-slice';

import { useFetchContactsQuery } from '../../store/contacts/contactsApi';

export default function ContactList() {
  // const dispatch = useDispatch();
  // const contacts = useSelector(state => state.contacts.items);
  const filter = useSelector(state => state.filter);
  const { data } = useFetchContactsQuery();
  console.log(data);

  const showFilteredContacts = () => {
    return data.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase()),
    );
  };

  return (
    <ul className={style.contactsList}>
      {data &&
        showFilteredContacts().map(({ id, name, phone }) => (
          <li className={style.item} key={id}>
            <span>
              {name}: {phone}
            </span>
            <button
              className={style.deleteBtn}
              type="button"
              // onClick={() => dispatch(removeContact(id))}
            >
              Delete
            </button>
          </li>
        ))}
    </ul>
  );
}
