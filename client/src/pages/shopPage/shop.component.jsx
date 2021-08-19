import React from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { fetchCollectionsStart } from '../../redux/shop/shop-actions';
import { useEffect } from 'react';
import { Suspense } from 'react';
import Spinner from '../../components/spinner/spinner.component';

const CollectionOverviewContainer = React.lazy(() => import('../../components/collections-overview/collection-overview.container'));
const CollectionPageContainer = React.lazy(() => import('../collectionPage/collectionPage.container'));


const ShopPage = ({ fetchCollectionsStart, match }) => {
    useEffect(() => {
        fetchCollectionsStart();
    }, [fetchCollectionsStart]);

    return (
        <div>
            <Suspense fallback={<Spinner/>}>
                <Route
                    exact
                    path={`${match.path}`}
                    component={CollectionOverviewContainer}
                />
                <Route
                    path={`${match.path}/:collectionId`}
                    component={CollectionPageContainer}
                />
            </Suspense>
        </div>
    )

}
const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart())
});

export default connect(null, mapDispatchToProps)(ShopPage);