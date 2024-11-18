import React, { useState } from 'react';
import axios from 'axios';
import styles from '../../styles/product.module.css';

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[0]);
  const [size, setSize] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const [extras, setExtras] = useState([]);

  const changePrice = number => {
    setPrice(price + number);
  };

  const handleSize = sizeIndex => {
    const difference = pizza.prices[sizeIndex] - pizza.prices[size];
    setSize(sizeIndex);
    changePrice(difference);
  };

  const handleChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtras(prev => [...prev, option]);
    } else {
      changePrice(-option.price);
      setExtras(extras.filter(extra => extra._id !== option._id));
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src={pizza.img} alt={pizza.name} className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.title}</h1>
        <span className={styles.price}>${price}</span>
        <p className={styles.desc}>{pizza.desc}</p>
        <h3 className={styles.choose}>Elige el tamaño</h3>
        <div className={styles.sizes}>
          <button className={styles.sizeButton} onClick={() => handleSize(0)}>
            Pequeña
          </button>
          <button className={styles.sizeButton} onClick={() => handleSize(1)}>
            Mediana
          </button>
          <button className={styles.sizeButton} onClick={() => handleSize(2)}>
            Grande
          </button>
        </div>
        <h3 className={styles.choose}>Elige ingredientes adicionales</h3>
        <div className={styles.ingredients}>
          {pizza.extraOptions.map(option => (
            <div className={styles.option} key={option._id}>
              <input
                type="checkbox"
                id={option.text}
                name={option.text}
                className={styles.checkbox}
                onChange={e => handleChange(e, option)}
              />
              <label htmlFor="double">{option.text}</label>
            </div>
          ))}
        </div>
        <div className={styles.add}>
          <input
            onChange={e => setQuantity(Number(e.target.value))}
            type="number"
            value={quantity}
            min={1}
            className={styles.quantity}
          />
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
