import { compose } from 'redux';
import CollectionPage from '../collectionPage/collections.component';
import { createStructuredSelector } from 'reselect';
import { selectIsCollectionsLoaded } from '../../redux/shop/shop-selectors';
import { connect } from 'react-redux';
import WithSpinner from '../../components/with-spinners/with-spinners.component';
const mapStateToProps = createStructuredSelector({
    isLoading: (state) => !selectIsCollectionsLoaded(state)
})
const CollectionPageContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionPage)
export default CollectionPageContainer