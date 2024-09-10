import { useState } from 'react';
import styles from '../styles';

const Ex1 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Nome: ${name}\nTelefone: ${phone}`);
  };

  return (
    <div style={styles.container}>
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit}>
        <div style={styles.inputGroup}>
          <label>
            Nome:
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Digite seu nome"
              required
              style={styles.input}
            />
          </label>
        </div>
        <div style={styles.inputGroup}>
          <label>
            Telefone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Digite seu telefone"
              required
              style={styles.input}
            />
          </label>
        </div>
        <button type="submit" style={styles.button}>Enviar</button>
      </form>
    </div>
  );
};

export default Ex1;
