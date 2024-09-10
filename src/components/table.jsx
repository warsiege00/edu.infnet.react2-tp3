import DataTable from 'react-data-table-component';
import { useContacts } from '../hooks/useContacts';



const Table = ({ onRowClick }) => {
  const { contacts, deleteContact } = useContacts();

  const handleEdit = (contact) => {
    onRowClick(contact);
  };

  const handleDelete = (id) => {
    if (window.confirm('Você tem certeza que deseja excluir este contato?')) {
      deleteContact(id);
    }
  };

  const columns = [
    {
      name: 'Nome',
      selector: row => row.name,
      sortable: true,
    },
    {
      name: 'Email',
      selector: row => row.email,
      sortable: true,
    },
    {
      name: 'Telefone',
      selector: row => row.phone,
      sortable: true,
    },
    {
      name: 'Ação',
      cell: row => (
        <div>
          <button onClick={() => handleEdit(row)}>Editar</button>
          <button onClick={() => handleDelete(row.id)}>Excluir</button>
        </div>
      ),
    },
  ];

  return (
    <div style={{ marginTop: '20px' }}>
      <h3>Contatos:</h3>
      <DataTable
        columns={columns}
        data={contacts}
        pagination
        highlightOnHover
        striped
      />
    </div>
  );
};

export default Table;
