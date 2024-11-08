import React from 'react';
import styles from '../styles/navbar.module.css';

const Navbar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.callButton}>
          <img
            src={require('../images/telephone.png')}
            alt=""
            width="32"
            height="32"
          />
        </div>

        <div className={styles.texts}>
          <div className={styles.text}>ORDENAR AHORA!</div>
          <div className={styles.text}>01 234 5678</div>
        </div>
      </div>
      <div className={styles.item}>
        <ul className={styles.list}>
          <li className={styles.listItem}>Inicio</li>
          <li className={styles.listItem}>Productos</li>
          <li className={styles.listItem}>Menú</li>
          <img
            src={require('../images/logo.png')}
            alt=""
            width="160px"
            height="69px"
          />
          <li className={styles.listItem}>Eventos</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contacto</li>
        </ul>
      </div>
      <div className={styles.item}>
        <div className={styles.cart}>
          <img
            src={require('../images/cart.png')}
            alt=""
            width="30px"
            height="30px"
          />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
