import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../styles/pizzaCard.module.css';

const PizzaCard = ({ pizza }) => {
  return (
    <div className={styles.container}>
      <Link to={`/product/${pizza._id}`}>
        <img
          className={styles.pizza}
          src={require(`../images/${pizza.img}`)}
          alt="Imagen de pizza"
        />
      </Link>
      <h1 className={styles.title}>{pizza.title}</h1>
      <span className={styles.price}>${pizza.prices[0]}</span>
      <p className={styles.desc}>{pizza.desc}</p>
    </div>
  );
};

export default PizzaCard;
