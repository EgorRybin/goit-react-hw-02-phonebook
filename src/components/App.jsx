import React, { Component } from 'react';
import { nanoid } from 'nanoid';

import Form from './PhoneBook/Form';
import ContactList from './PhoneBook/ContactList';
import Filter from './PhoneBook/Filter';
import s from './PhoneBook/App.module.css';


const INIT_STATE = {
  contacts: [],
  filter: '',
};

class App extends Component {
  state = { ...INIT_STATE };

  handleChange = e => {
    const { value } = e.target;
    this.setState({ filter: value });
  };

  formSubmitData = data => {
    const { contacts } = this.state;
    if (
      contacts.some(el => el.name.toLowerCase() === data.name.toLowerCase())
    ) {
      alert(`${data.name} is allready in contacts`);
      return;
    }

    const id = nanoid();
    const contactInfo = { id, name: data.name, number: data.number };
    this.setState(prev => ({
      contacts: [...prev.contacts, contactInfo],
    }));
  };

  deleteContact = e => {
    const { contacts } = this.state;
    const deleteContactFromArr = contacts.filter(el => el.id !== e.target.name);
    this.setState(prev => ({
      contacts: [...deleteContactFromArr],
    }));
  };

  render() {
    const { contacts, filter } = this.state;
    const { handleChange, formSubmitData, deleteContact } = this;

    const filteredContscts = filter
      ? contacts.filter(el =>
          el.name.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts;

    return (
      <div className={s.conteiner}>
        <h1>Phonebook</h1>
        <Form submitData={formSubmitData} />
        <h2>Contacts</h2>
        <Filter handleChange={handleChange} filter={filter} />
        <ContactList
          contactsData={filteredContscts}
          deleteContact={deleteContact}
        />
      </div>
    );
  }
}

export default App;
