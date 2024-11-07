import React from 'react';
import styles from '../styles/pizzaCard.module.css';

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <img
        className={styles.pizza}
        src={require('../images/pizza.png')}
        alt="Imagen de pizza"
      />
      <h1 className={styles.title}>PIZZA ESPECIAL</h1>
      <span className={styles.price}>$99</span>
      <p className={styles.desc}>
        Una pizza única, elaborada con los mejores ingredientes, para un sabor
        incomparable. Perfecta para compartir o disfrutar en solitario.
        ¡Pruébala y descubre por qué es nuestra especialidad!
      </p>
    </div>
  );
};

export default PizzaCard;
