import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/product.module.css';

const Product = ({ pizza }) => {
  const [size, setSize] = useState(0);

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src={pizza.img} alt={pizza.name} className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${pizza.prices[size]}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Elige el tamaño</h3>
        <div className={styles.sizes}>
          <button className={styles.sizeButton} onClick={() => setSize(0)}>
            Pequeña
          </button>
          <button className={styles.sizeButton} onClick={() => setSize(1)}>
            Mediana
          </button>
          <button className={styles.sizeButton} onClick={() => setSize(2)}>
            Grande
          </button>
        </div>
        <h3 className={styles.choose}>Elige ingredientes adicionales</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map(option => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id="double"
                name="double"
                className={styles.checkbox}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `http://localhost:3000/api/products/${params.id}`
  );
  return {
    props: {
      pizza: res.data,
    },
  };
};

export default Product;
