import React from 'react';
import PropTypes from 'prop-types';
import {
  ButtonDelete,
  ContactName,
  ContactPhone,
  ContactsItem,
} from './ContactItem.styled';

const ContactItem = ({ filteredContacts, handleDeleteContact }) => {
  return (
    <ul>
      {filteredContacts.length > 0 ? (
        filteredContacts.map(contact => (
          <ContactsItem key={contact.id}>
            <ContactName key={`${contact.id}-name`}>
              {contact.name}:
            </ContactName>
            <ContactPhone
              key={`${contact.id}-phone`}
              href={`tel:${contact.number}`}
            >
              {contact.number}
            </ContactPhone>
            <ButtonDelete onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </ButtonDelete>
          </ContactsItem>
        ))
      ) : (
        <ContactName>No contact found...</ContactName>
      )}
    </ul>
  );
};

ContactItem.propTypes = {
  filteredContacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ).isRequired,
  handleDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
