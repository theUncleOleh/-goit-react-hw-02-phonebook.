import React from "react";
import ContactItem from "../ContactItem/ContactItem";
import PropTypes from 'prop-types';
import s from "./ContactList.module.css"

const ContactList = ({contacts, onDeleteContact}) => (
    <ul>
  {contacts.map(({id, name, number}) => (
    <li key={id}><ContactItem id={id} name={name} number={number}/>
    <button onClick={() => onDeleteContact(id)}>delete</button>
    </li>
  ))}
</ul>
)

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name:PropTypes.string.isRequired,
      number: PropTypes.string.isRequired
    })
    )
  }