import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/login.module.css';
import axios from 'axios';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleClick = async () => {
    if (!username.trim() || !password.trim()) {
      setError('Por favor completa todos los campos');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Corregida la URL para usar /admin/login en lugar de /api/login
      const response = await axios.post(
        '/admin/login',
        {
          username,
          password,
        },
        {
          headers: {
            'Content-Type': 'application/json',
          },
          withCredentials: true,
        }
      );

      if (response.data.success) {
        navigate('/admin');
      } else {
        setError('Credenciales inválidas');
      }
    } catch (err) {
      console.error('Login error:', err);
      if (err.response?.status === 400) {
        setError('Credenciales no válidas');
      } else {
        setError(
          'Error al intentar iniciar sesión. Por favor intenta de nuevo.'
        );
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    handleClick();
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <h1>Panel de Administración</h1>
        <form onSubmit={handleSubmit}>
          <input
            placeholder="Usuario"
            className={styles.input}
            onChange={e => setUsername(e.target.value)}
            value={username}
            disabled={isLoading}
            required
          />
          <input
            placeholder="Contraseña"
            type="password"
            className={styles.input}
            onChange={e => setPassword(e.target.value)}
            value={password}
            disabled={isLoading}
            required
          />
          <button type="submit" className={styles.button} disabled={isLoading}>
            {isLoading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
          {error && <span className={styles.error}>{error}</span>}
        </form>
      </div>
    </div>
  );
};

export default Login;
