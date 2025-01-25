import React, { useState } from 'react'
import './App.css'
import { ContactForm } from './components/ContactForm'
import { Contact } from './types/Contact'
import { INITIAL_STATE_TEST_DATA } from './constants/InitialStateTestData';
import { State } from './interfaces/State';
import { ContactList } from './components/ContactList';
import { Filter } from './components/Filter';


function App() {
  const [state, setState] = useState<State>(INITIAL_STATE_TEST_DATA);
  const filteredContacts = state.contacts.filter((contact) => {
    return contact.name.toLowerCase().includes(state.filter.toLowerCase());
  });

  const handleAddContact = (newContact: Contact) => {
    setState((prevState) => ({
      contacts: [...prevState.contacts, newContact],
      filter: '',
      name: '',
      number: '',
    }));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({
      ...prevState,
      filter: event.target.value,
    }));
  };

  const handleDeleteContact = (id: string) => {
    setState((prevState) => ({
      ...prevState,
      contacts: prevState.contacts.filter((contact) => contact.id !== id),
    }));
  };

  return (
    <>
      <h1>Phonebook</h1>
      <ContactForm contacts={state.contacts} onAddContact={handleAddContact} />
      <h2>Contacts</h2>
      <Filter filter={state.filter} onFilterChange={handleFilterChange} />
      <ContactList contacts={filteredContacts} onDeleteContact={handleDeleteContact} />
    </>
  )
}

export default App
