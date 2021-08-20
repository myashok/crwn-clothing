import React from 'react';

import styles from './spinner.styles.modules.scss';
const Spinner = () => (
    <div className={styles.overlay}>
        <div className={styles.container} />
    </div>
);

export default Spinner;
