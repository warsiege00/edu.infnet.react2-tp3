import { useForm } from 'react-hook-form';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../lib/firebase';

const styles = {
  container: {
    padding: '20px',
    maxWidth: '400px',
    margin: '0 auto',
    textAlign: 'center',
  },
  inputGroup: {
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '8px',
    marginTop: '5px',
  },
  button: {
    padding: '10px 20px',
    marginTop: '10px',
    cursor: 'pointer',
  },
  error: {
    color: 'red',
    fontSize: '12px',
  },
};

const Ex15 = () => {
  const { register, handleSubmit, formState: { errors }, setError } = useForm();

  const onSubmit = async (data) => {
    try {
      await signInWithEmailAndPassword(auth, data.email, data.password);
      alert('Login realizado com sucesso!');
    } catch (error) {
      console.error('Erro ao fazer login: ', error.message);
      setError('firebase', { message: error.message });
    }
  };

  return (
    <div style={styles.container}>
      <h2>Login</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
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
            Senha:
            <input
              type="password"
              {...register('password', {
                required: 'O campo senha é obrigatório.',
                minLength: {
                  value: 6,
                  message: 'A senha deve ter no mínimo 6 caracteres.',
                }
              })}
              placeholder="Digite sua senha"
              style={styles.input}
            />
          </label>
          {errors.password && <span style={styles.error}>{errors.password.message}</span>}
        </div>
        <button type="submit" style={styles.button}>Entrar</button>
        {errors.firebase && <span style={styles.error}>{errors.firebase.message}</span>}
      </form>
    </div>
  );
};

export default Ex15;
