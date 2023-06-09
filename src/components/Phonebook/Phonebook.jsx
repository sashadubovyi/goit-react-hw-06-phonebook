import React, { useState } from 'react';
import {
  PhoneBookContainer,
  Title,
  FormContacts,
  InputName,
  ButtonSubmit,
} from './Phonebook.styled';

const PhoneBook = ({ handleAddContact }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = evt => {
    const { name, value } = evt.target;

    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    handleAddContact(name, number);
    setName('');
    setNumber('');
  };

  return (
    <PhoneBookContainer>
      <Title>Phonebook</Title>
      <FormContacts onSubmit={handleSubmit}>
        <InputName
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          value={name}
          onChange={handleChange}
          placeholder="Enter your full name"
          required
        />
        <InputName
          type="tel"
          name="number"
          // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          pattern="^\+\d{1,12}$"
          input="^\+\d{1,3}\s?\d{1,14}$"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          value={number}
          onChange={handleChange}
          placeholder="Enter your number"
          required
        />
        <ButtonSubmit type="submit">Add contact</ButtonSubmit>
      </FormContacts>
    </PhoneBookContainer>
  );
};

export default PhoneBook;
