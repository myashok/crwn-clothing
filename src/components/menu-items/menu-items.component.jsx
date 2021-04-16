import React from 'react';
import { withRouter } from 'react-router-dom';
import styles from './menu-items.styles.module.scss';


const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div className={`${size} ${styles['menu-item']}`} onClick={() => history.push(`${match.url}${linkUrl}`)}>
    <div
      className={styles['background-image']}
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className={styles['content']}>
      <h1 className={styles['title']}>{title.toUpperCase()}</h1>
      <span className={styles['subtitle']}>SHOP NOW</span>
    </div>
  </div>
);

export default withRouter(MenuItem);