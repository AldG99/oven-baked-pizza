import React, { useState } from 'react';
import styles from '../styles/orderDetetail.module.css';

const OrderDetail = ({ total, createOrder }) => {
  const [customer, setCustomer] = useState('');
  const [address, setAddress] = useState('');

  const handleClick = () => {
    createOrder({ customer, address, total, method: 0 });
  };

  return (
    <div className={styles.container}>
      <div className="wrapper">
        <h1 className={styles.title}>Pagarás $12 después de la entrega.</h1>
        <div className={styles.item}>
          <label className={styles.label}>Nombre y Apellido</label>
          <input
            placeholder="Jon Snow"
            type="text"
            className={styles.input}
            onChange={e => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Número de Teléfono</label>
          <input
            type="text"
            placeholder="+52 55 1234 5678"
            className={styles.input}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Dirección</label>
          <textarea
            rows={5}
            placeholder="Av. Reforma 123, CDMX"
            type="text"
            className={styles.textarea}
            onChange={e => setAddress(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          Pedir
        </button>
      </div>
    </div>
  );
};

export default OrderDetail;
