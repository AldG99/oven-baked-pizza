import React from 'react';
import PizzaCard from './pizzaCard';
import styles from '../styles/pizzaList.module.css';

const PizzaList = ({ pizzaList }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>LA MEJOR PIZZA DE LA CIUDAD</h1>
      <p className={styles.desc}>
        Bienvenido a nuestro rincón de sabores auténticos. Aquí encontrarás la
        mejor pizza, hecha con dedicación y pasión por la tradición italiana.
        Cada pizza está preparada con ingredientes frescos y seleccionados
        cuidadosamente, desde la masa crujiente hasta la salsa de tomate hecha
        en casa y el queso derretido que complementa cada bocado. Ya sea que
        prefieras algo clásico como la Margarita o algo más atrevido y único,
        nuestra variedad de pizzas artesanales tiene algo especial para todos.
        ¡Ven y prueba la diferencia que solo los ingredientes de calidad y el
        amor por la cocina pueden ofrecer!
      </p>
      <div className={styles.wrapper}>
        {pizzaList.map(pizza => (
          <PizzaCard key={pizza.id} pizza={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaList;
