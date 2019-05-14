import {
  all,
} from 'redux-saga/effects';
import weatherSaga from './weather';

function* rootSagas() {
  yield all([
    weatherSaga(),
  ]);
}

export default rootSagas;
