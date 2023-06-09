import React, { useEffect, useState } from 'react';
import { nanoid } from 'nanoid';
import PhoneBook from './Phonebook/Phonebook';
import Contacts from './Contacts/Contacts';
import { Base } from './App.styled';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) || []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = (name, number) => {
    const existingContact = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (existingContact) {
      Notify.failure('This contact already exists!');
      return;
    }

    const newContact = {
      id: nanoid(),
      name: name,
      number: number,
    };

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = userId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => {
        return contact.id !== userId;
      })
    );
  };

  //

  const handleFilterChange = evt => {
    setFilter(evt.target.value);
  };

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLocaleLowerCase())
  );

  return (
    <Base>
      <PhoneBook handleAddContact={handleAddContact} />
      <Contacts
        filter={filter}
        handleFilterChange={handleFilterChange}
        filteredContacts={filteredContacts}
        handleDeleteContact={handleDeleteContact}
      />
    </Base>
  );
};

export default App;
