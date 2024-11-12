import React from 'react';
import styles from '../../styles/order.module.css';

const Order = () => {
  const status = 0;

  const statusClass = index => {
    if (index - status < 1) return styles.done;
    if (index - status === 1) return styles.inProgress;
    if (index - status > 1) return styles.undone;
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <tr className={styles.trTitle}>
              <th>ID de Pedido</th>
              <th>Cliente</th>
              <th>Dirección</th>
              <th>Total</th>
            </tr>
            <tr className={styles.tr}>
              <td>
                <span className={styles.id}>987654321001</span>
              </td>
              <td>
                <span className={styles.name}>Jon Snow</span>
              </td>
              <td>
                <span className={styles.address}>
                  Av. Reforma 1234, Ciudad de México
                </span>
              </td>
              <td>
                <span className={styles.total}>$150.00</span>
              </td>
            </tr>
          </table>
        </div>
        <div className={styles.row}>
          <div className={statusClass(0)}>
            <img
              src={require('../../images/paid.png')}
              width={30}
              height={30}
              alt=""
            />
            <span>Pago</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src={require('../../images/checked.png')}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(1)}>
            <img
              src={require('../../images/bake.png')}
              width={30}
              height={30}
              alt=""
            />
            <span>Preparando</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src={require('../../images/checked.png')}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(2)}>
            <img
              src={require('../../images/bike.png')}
              width={30}
              height={30}
              alt=""
            />
            <span>En camino</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src={require('../../images/checked.png')}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
          <div className={statusClass(3)}>
            <img
              src={require('../../images/delivered.png')}
              width={30}
              height={30}
              alt=""
            />
            <span>Entregado</span>
            <div className={styles.checkedIcon}>
              <img
                className={styles.checkedIcon}
                src={require('../../images/checked.png')}
                width={20}
                height={20}
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>TOTAL DEL CARRITO</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Subtotal:</b>$150.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Descuento:</b>$0.00
          </div>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Total:</b>$150.00
          </div>
          <button disabled className={styles.button}>
            PAGADO
          </button>
        </div>
      </div>
    </div>
  );
};

export default Order;
