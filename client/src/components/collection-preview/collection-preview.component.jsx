import React from 'react';
import CollectionItem from '../collection-item/collection-item.component';
import styles from './collection-preview.styles.module.scss';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, match, history }) => (
    <div className={styles['collection-preview']}>
        <h1 className={styles['title']} onClick={() => history.push(`${match.url}/${title.toLowerCase()}`)}>{title.toUpperCase()}</h1>
        <div className={styles['preview']}>
            {
                items.filter((_, idx) => idx < 4)
                    .map(item => (
                        <CollectionItem key={item.id} item={item} />
                    ))
            }
        </div>
    </div>
)
export default withRouter(CollectionPreview);