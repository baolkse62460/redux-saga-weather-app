import {
  call, put,
  takeEvery, all
} from 'redux-saga/effects';
import {
  WEATHER_FETCH_BEGIN,
  fetchWeatherSuccess,
} from '../../reducers/weather';

function* fetchWeather(action) {
  const res = yield call(fetch, 'http://api.openweathermap.org/data/2.5/weather?q=Thanh%20pho%20Ho%20Chi%20Minh&appid=8e6bc4c2ba46936256cc22286ccc4dc7');
  const json = yield call([res, 'json']);

  yield put(fetchWeatherSuccess(json));
};

function* watchFetchWeather() {
  yield takeEvery(WEATHER_FETCH_BEGIN, fetchWeather);
};

function* weatherSaga() {
  yield all([
    watchFetchWeather(),
  ]);
}

export default weatherSaga;