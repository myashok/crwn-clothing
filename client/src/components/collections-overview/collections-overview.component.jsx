import React from 'react';
import CollectionPreview from '../../components/collection-preview/collection-preview.component';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { selectCollectionsForPreview } from '../../redux/shop/shop-selectors.js';
import styles from './collections-overview.styles.module.scss';

const CollectionsOverview = ({ collections }) => (
    <div className={styles['collections-overview']}>
        {
            collections.map(({ id, ...otherCollectionProps }) => (
                <CollectionPreview key={id} {...otherCollectionProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionsForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);
