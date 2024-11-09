import React, { useState } from 'react';
import pizzaImage from '../../images/pizza.png';
import styles from '../../styles/product.module.css';

const Product = () => {
  const [size, setSize] = useState(0);

  const pizza = {
    id: 1,
    img: pizzaImage,
    name: 'CAMPAGNOLA',
    price: [19.9, 23.9, 27.9],
    desc: 'Pizza italiana auténtica, elaborada con ingredientes frescos de la mejor calidad. Masa fina y crujiente, cubierta con una mezcla de sabores vibrantes que destacan los ingredientes tradicionales como tomate maduro, mozzarella suave, albahaca fresca, y un toque de aceite de oliva virgen. ¡Una experiencia culinaria que te transporta a Italia en cada bocado!',
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.imgContainer}>
          <img src={pizza.img} alt={pizza.name} className={styles.img} />
        </div>
      </div>
      <div className={styles.right}>
        <h1 className={styles.title}>{pizza.name}</h1>
        <span className={styles.price}>${pizza.price[size]}</span>
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
          <div className={styles.option}>
            <input
              type="checkbox"
              id="double"
              name="double"
              className={styles.checkbox}
            />
            <label htmlFor="double">Ingredientes Dobles</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="cheese"
              name="cheese"
              className={styles.checkbox}
            />
            <label htmlFor="cheese">Extra Queso</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="spicy"
              name="spicy"
              className={styles.checkbox}
            />
            <label htmlFor="spicy">Salsa Picante</label>
          </div>
          <div className={styles.option}>
            <input
              type="checkbox"
              id="garlic"
              name="garlic"
              className={styles.checkbox}
            />
            <label htmlFor="garlic">Salsa de Ajo</label>
          </div>
        </div>
        <div className={styles.add}>
          <input type="number" defaultValue={1} className={styles.quantity} />
          <button className={styles.button}>Añadir al Carrito</button>
        </div>
      </div>
    </div>
  );
};

export default Product;
