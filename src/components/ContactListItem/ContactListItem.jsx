import React from 'react';
import style from './ContactListItem.module.css';
import { useDeleteContactMutation } from '../../store/contacts/contactsApi';
import PropTypes from 'prop-types';
import Loader from '../Loader/Loader';

export default function ContactListItem({ contact }) {
  const { id, name, phone } = contact;
  const [deleteContact, { isLoading: isDeleting }] = useDeleteContactMutation();

  return (
    <li className={style.item}>
      <span>
        {name}: {phone}
      </span>
      <button
        className={style.deleteBtn}
        type="button"
        onClick={() => deleteContact(id)}
        disabled={isDeleting}
      >
        {isDeleting ? <Loader /> : 'Delete'}
      </button>
    </li>
  );
}

ContactListItem.propTypes = {
  contact: PropTypes.object,
};
