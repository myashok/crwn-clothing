import { all, call } from 'redux-saga/effects';

import { onFetchCollectionsStart } from './redux/shop/shop-sagas';

export default function* rootSaga() {
  yield all([call(onFetchCollectionsStart)]);
}
