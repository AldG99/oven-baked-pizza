import React from 'react';
import styles from '../styles/featured.module.css';

const Featured = () => {
  return (
    <div className={styles.featured}>
      <img
        src={require('../images/slide2.jpg')}
        alt="Featured"
        className={styles['featured-image']}
      />
    </div>
  );
};

export default Featured;
