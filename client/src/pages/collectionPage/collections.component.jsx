import React from 'react';
import { connect } from 'react-redux';
import CollectionItems from '../../components/collection-item/collection-item.component';
import { selectCollection } from '../../redux/shop/shop-selectors';
import styles from './collections.styles.module.scss';
const CollectionPage = ({ collection }) => {
    const { title, items } = collection;
    console.log(styles['collection-item']);
    return (
        <div className={styles['collection-page']}>
            <h2 className={styles['title']}>{title}</h2>
            <div className={styles['items']}>
                {items.map(item => (
                    <CollectionItems stl={styles['collection-item']} key={item.id} item={item} />
                ))}
            </div>
        </div>
    );
};

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
});

export default connect(mapStateToProps)(CollectionPage);
