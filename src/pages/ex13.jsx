import { useState } from 'react';
import Form from '../components/form';
import Table from '../components/table';
import { useContacts } from '../hooks/useContacts';

const Ex13 = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const { addContact } = useContacts();

  const handleRowClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleFormSubmit = async (data) => {
    if (selectedContact) {
      alert('Dados enviados para atualização!');
    } else {
      await addContact(data);
    }
    setSelectedContact(null);
  };

  return (
    <div>
      <Form selectedContact={selectedContact} onFormSubmit={handleFormSubmit} />
      <Table onRowClick={handleRowClick} />
    </div>
  );
};

export default Ex13;
