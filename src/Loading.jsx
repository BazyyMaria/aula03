import React from 'react';
import loadingSVG from '../assets/loading.svg'; 
import styles from './Loading.module.css'; 

const Loading = () => {
  return (
    <div className={styles.loadingContainer}>
      <img src={loadingSVG} alt="Carregando..." className={styles.loadingIcon} />
    </div>
  );
};

export default Loading;