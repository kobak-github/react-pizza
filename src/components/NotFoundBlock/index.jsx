import React from 'react';

import styles from './NotFoundBlock.module.scss';

export const NotFoundBlock = () => {
  return (
    <div className={styles.root}>
      <h1 className={styles.title}>
        <span>(404) 😔</span>
        <br />
        Ничего не найдено
      </h1>
      <p className={styles.text}>
        К сожалению данная строница отсутствует в нашем интернет-магазине
      </p>
    </div>
  );
};
