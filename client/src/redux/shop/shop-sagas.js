import { takeLatest, call, all, put } from 'redux-saga/effects';
import { fetchCollectionsFailure, fetchCollectionsSuccess } from './shop-actions';
import { firestore, convertCollectionsSnapshotToMap } from '../../firebase/firebase.util';
import ShopActionTypes from './shop-types';

export function* fetchCollections() {
    try {
        const collectionRef = firestore.collection('collections');
        const snapshot = yield collectionRef.get();
        const collectionsMap = yield call(
            convertCollectionsSnapshotToMap,
            snapshot
        );
        yield put(fetchCollectionsSuccess(collectionsMap));
    } catch (error) {
        yield put(fetchCollectionsFailure(error.message));
    }
}

function* onFetchCollectionsStart() {
    yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START, fetchCollections);
}

export default function* shopSagas() {
    yield all([call(onFetchCollectionsStart)]);
}
