import { useState } from 'react';
import styles from '../styles';

const Ex2 = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [errors, setErrors] = useState({ name: '', phone: '' });

  const validateForm = () => {
    let isValid = true;
    const newErrors = { name: '', phone: '' };

    if (!name.trim()) {
      newErrors.name = 'O campo nome é obrigatório.';
      isValid = false;
    }

    if (!phone.trim()) {
      newErrors.phone = 'O campo telefone é obrigatório.';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      alert(`Nome: ${name}\nTelefone: ${phone}`);
      setName('');
      setPhone('');
      setErrors({ name: '', phone: '' });
    }
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
              style={styles.input}
            />
          </label>
          {errors.name && <span style={styles.error}>{errors.name}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>
            Telefone:
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Digite seu telefone"
              style={styles.input}
            />
          </label>
          {errors.phone && <span style={styles.error}>{errors.phone}</span>}
        </div>
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Ex2;
