import { useState } from 'react';
import styles from '../styles/add.module.css';

const Add = ({ setClose }) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [desc, setDesc] = useState('');
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState({});

  const changePrice = (e, index) => {
    const currentPrices = [...prices];
    currentPrices[index] = parseFloat(e.target.value) || 0;
    setPrices(currentPrices);
  };

  const handleExtraInput = e => {
    setExtra({ ...extra, [e.target.name]: e.target.value });
  };

  const handleExtra = () => {
    if (extra.text && extra.price) {
      setExtraOptions(prev => [...prev, { ...extra, id: Date.now() }]);
      setExtra({});
    }
  };

  const handleCreate = async () => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('title', title);
    formData.append('desc', desc);
    formData.append('prices', JSON.stringify(prices));
    formData.append('extraOptions', JSON.stringify(extraOptions));

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });
      const result = await response.json();
      console.log('Producto creado:', result);
    } catch (error) {
      console.error('Error al crear el producto:', error);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <span onClick={() => setClose(true)} className={styles.close}>
          X
        </span>
        <h1>Agregar una nueva Pizza</h1>
        <div className={styles.item}>
          <label className={styles.label}>Elige una imagen</label>
          <input type="file" onChange={e => setFile(e.target.files[0])} />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Título</label>
          <input
            className={styles.input}
            type="text"
            onChange={e => setTitle(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Descripción</label>
          <textarea
            rows={4}
            type="text"
            onChange={e => setDesc(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Precios</label>
          <div className={styles.priceContainer}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Pequeña"
              onChange={e => changePrice(e, 0)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Mediana"
              onChange={e => changePrice(e, 1)}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Grande"
              onChange={e => changePrice(e, 2)}
            />
          </div>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Extras</label>
          <div className={styles.extra}>
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="text"
              placeholder="Elemento"
              name="text"
              value={extra.text || ''}
              onChange={handleExtraInput}
            />
            <input
              className={`${styles.input} ${styles.inputSm}`}
              type="number"
              placeholder="Precio"
              name="price"
              value={extra.price || ''}
              onChange={handleExtraInput}
            />
            <button className={styles.extraButton} onClick={handleExtra}>
              Agregar
            </button>
          </div>
          <div className={styles.extraItems}>
            {extraOptions.map(option => (
              <span key={option.id} className={styles.extraItem}>
                {option.text}
              </span>
            ))}
          </div>
        </div>
        <button className={styles.addButton} onClick={handleCreate}>
          Crear
        </button>
      </div>
    </div>
  );
};

export default Add;
