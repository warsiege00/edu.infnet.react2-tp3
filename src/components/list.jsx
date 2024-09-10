import { useContacts } from '../hooks/useContacts';

const styles = {
  list: {
    marginTop: '20px',
  },
  listItem: {
    padding: '10px',
    borderBottom: '1px solid #ddd',
  },
};

const List = () => {
  const { contacts } = useContacts();

  return (
    <div style={styles.list}>
      <h3>Contatos:</h3>
      {contacts.length > 0 ? (
        contacts.map(contact => (
          <div key={contact.id} style={styles.listItem}>
            <strong>Nome:</strong> {contact.name}<br />
            <strong>Email:</strong> {contact.email}<br />
            <strong>Telefone:</strong> {contact.phone}
          </div>
        ))
      ) : (
        <p>Nenhum contato encontrado.</p>
      )}
    </div>
  );
};

export default List;
