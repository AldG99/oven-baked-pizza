import React, { useState } from 'react';
import styles from '../../styles/admin.module.css';
import axios from 'axios';

const Index = ({ orders = [], products = [] }) => {
  const [pizzaList, setPizzaList] = useState(products || []);
  const [orderList, setOrderList] = useState(orders || []);
  const status = ['Preparando', 'En camino', 'Entregado'];

  const handleDelete = async id => {
    try {
      await axios.delete(`http://localhost:3000/api/products/${id}`);
      setPizzaList(pizzaList.filter(pizza => pizza._id !== id));
    } catch (err) {
      console.error('Error al eliminar el producto:', err);
    }
  };

  const handleStatus = async id => {
    const item = orderList.find(order => order._id === id);
    if (!item) return;

    const currentStatus = item.status;

    try {
      const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
        status: currentStatus + 1,
      });
      setOrderList([res.data, ...orderList.filter(order => order._id !== id)]);
    } catch (err) {
      console.error('Error al actualizar el estado:', err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Productos</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Imagen</th>
              <th>Id</th>
              <th>Título</th>
              <th>Precio</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {pizzaList.length > 0 ? (
              pizzaList.map(product => (
                <tr className={styles.trTitle} key={product._id}>
                  <td>
                    <img
                      src={product.img}
                      alt={product.title}
                      width={50}
                      height={50}
                      style={{ objectFit: 'cover' }}
                    />
                  </td>
                  <td>{product._id.slice(0, 5)}...</td>
                  <td>{product.title}</td>
                  <td>${product.prices[0]}</td>
                  <td>
                    <button className={styles.button}>Editar</button>
                    <button
                      className={styles.button}
                      onClick={() => handleDelete(product._id)}
                    >
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No hay productos disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className={styles.item}>
        <h1 className={styles.title}>Órdenes</h1>
        <table className={styles.table}>
          <thead>
            <tr className={styles.trTitle}>
              <th>Id</th>
              <th>Cliente</th>
              <th>Total</th>
              <th>Pago</th>
              <th>Estado</th>
              <th>Acción</th>
            </tr>
          </thead>
          <tbody>
            {orderList.length > 0 ? (
              orderList.map(order => (
                <tr className={styles.trTitle} key={order._id}>
                  <td>{order._id.slice(0, 5)}...</td>
                  <td>{order.customer}</td>
                  <td>${order.total}</td>
                  <td>
                    {order.method === 0 ? (
                      <span>efectivo</span>
                    ) : (
                      <span>pagado</span>
                    )}
                  </td>
                  <td>{status[order.status]}</td>
                  <td>
                    <button onClick={() => handleStatus(order._id)}>
                      Siguiente etapa
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No hay órdenes disponibles.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export const getServerSideProps = async ctx => {
  const myCookie = ctx.req?.cookies || '';

  // Corregido TOKEN en mayúsculas
  if (myCookie.token !== process.env.TOKEN) {
    return {
      redirect: {
        destination: '/admin/login',
        permanent: false,
      },
    };
  }

  const productRes = await axios.get('http://localhost:3000/api/products');
  const orderRes = await axios.get('http://localhost:3000/api/orders');

  return {
    props: {
      orders: orderRes.data || [],
      products: productRes.data || [],
    },
  };
};

export default Index;
