import { useForm } from 'react-hook-form';
import { db, collection, addDoc } from '../lib/firebase';

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '8px',
    marginTop: '5px',
  },
  button: {
    padding: '10px 20px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

const Ex9 = () => {
  const { register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = async (data) => {
    try {
      await addDoc(collection(db, 'contacts'), data);
      alert(`Nome: ${data.name}\nEmail: ${data.email}\nTelefone: ${data.phone}`);
      reset();
    } catch (e) {
      console.error('Erro ao adicionar documento: ', e);
      alert('Erro ao adicionar dados. Veja o console para mais detalhes.');
    }
  };

  return (
    <div style={styles.container}>
      <h2>Formulário de Contato</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div style={styles.inputGroup}>
          <label>
            Nome:
            <input
              type="text"
              {...register('name', { required: 'O campo nome é obrigatório.' })}
              placeholder="Digite seu nome"
              style={styles.input}
            />
          </label>
          {errors.name && <span style={styles.error}>{errors.name.message}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>
            Email:
            <input
              type="email"
              {...register('email', { 
                required: 'O campo email é obrigatório.', 
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: 'Formato de email inválido.',
                }
              })}
              placeholder="Digite seu email"
              style={styles.input}
            />
          </label>
          {errors.email && <span style={styles.error}>{errors.email.message}</span>}
        </div>
        <div style={styles.inputGroup}>
          <label>
            Telefone:
            <input
              type="tel"
              {...register('phone', {
                required: 'O campo telefone é obrigatório.',
                pattern: {
                  value: /^\d+$/,
                  message: 'O campo telefone deve conter apenas números.',
                },
              })}
              placeholder="Digite seu telefone"
              style={styles.input}
            />
          </label>
          {errors.phone && <span style={styles.error}>{errors.phone.message}</span>}
        </div>
        <button type="submit" style={styles.button}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Ex9;
