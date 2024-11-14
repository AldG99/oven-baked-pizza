import styles from '../styles/footer.module.css';

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <img
          className={styles.pizza}
          src={require('../images/bg.png')}
          alt=""
          onContextMenu={e => e.preventDefault()}
          style={{ userSelect: 'none', pointerEvents: 'none' }}
        />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            OH SÍ, LO HICIMOS. LA PIZZA LAMA, UNA REBANADA BIEN HORNEADA.
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>ENCUENTRA NUESTROS RESTAURANTES</h1>
          <p className={styles.text}>
            Calle Falsa 123
            <br /> Colonia Centro
            <br /> Ciudad de México, 01000
            <br /> Tel: (55) 1234-5678
          </p>
          <p className={styles.text}>
            Av. Reforma 456
            <br /> Colonia Juárez
            <br /> Ciudad de México, 06600
            <br /> Tel: (55) 2345-6789
          </p>
          <p className={styles.text}>
            Calle Insurgentes 789
            <br /> Colonia Roma
            <br /> Ciudad de México, 06700
            <br /> Tel: (55) 3456-7890
          </p>
          <p className={styles.text}>
            Av. Universidad 1011
            <br /> Colonia Del Valle
            <br /> Ciudad de México, 03100
            <br /> Tel: (55) 4567-8901
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>HORARIO DE TRABAJO</h1>
          <p className={styles.text}>
            LUNES A VIERNES
            <br /> 9:00 - 22:00
          </p>
          <p className={styles.text}>
            SÁBADO - DOMINGO
            <br /> 9:00 - 22:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
