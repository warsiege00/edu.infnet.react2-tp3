import { useState } from 'react';
import Form from '../components/form';
import Table from '../components/table';
import { useContacts } from '../hooks/useContacts';

const Ex14 = () => {
  const [selectedContact, setSelectedContact] = useState(null);
  const { addContact, updateContact } = useContacts();

  const handleRowClick = (contact) => {
    setSelectedContact(contact);
  };

  const handleFormSubmit = async (data) => {
    if (selectedContact) {
      await updateContact(selectedContact.id, data);
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

export default Ex14;
