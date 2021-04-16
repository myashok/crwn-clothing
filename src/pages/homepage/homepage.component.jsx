import React from 'react';

import Directory from '../../components/directory/directory.component';

import styles from './homepage.styles.module.scss';

const HomePage = () => (
  <div className={styles['homepage']}>
    <Directory />
  </div>
);

export default HomePage;