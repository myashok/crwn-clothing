import { compose } from 'redux';
import CollectionsOverview from './collections-overview.component';
import WithSpinner from '../with-spinners/with-spinners.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsFetching } from '../../redux/shop/shop-selectors';
import { connect } from 'react-redux';
const mapStateToProps = createStructuredSelector({
    isLoading: selectIsCollectionsFetching
})
const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionsOverview)
export default CollectionOverviewContainer