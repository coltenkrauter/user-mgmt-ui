import { all, call, fork, put, takeLatest, cancelled  } from 'redux-saga/effects';
import { SettingsActionTypes } from './types';
import { updateSettingsAsync, updateSettingsLoading } from './actions';
import API from '../../util/api';
import axios from 'axios';

function* updateSettings(action: any) {
  yield put(updateSettingsLoading(true));
  // Initialize a cancel source so that HTTP requests can be cancelled at anytime
  const cancelSource = axios.CancelToken.source();
  try {
    let response = yield call(API.get, `${ window.location.origin }${ process.env.PUBLIC_URL }/static/settings.json`, {
        cancelToken: cancelSource.token
      }
    );
    let settings = response.data;
    yield put(updateSettingsAsync(settings));
  } catch(error) {
    // Loading settings failed
    console.error(error);
  } finally {
    if (yield cancelled()) {
      yield call(cancelSource.cancel);
    }
    yield put(updateSettingsLoading(false));
  }
}

// This is our watcher function. We use `take*()` functions to watch Redux for a specific action
// type, and run our saga, for example the `handleFetch()` saga above.
function* watchUpdateSettings() {
  yield takeLatest(SettingsActionTypes.UPDATE_SETTINGS, updateSettings);
}

// We can also use `fork()` here to split our saga into multiple watchers.
function* saga() {
  yield all(
    [
      fork(watchUpdateSettings),
    ]
  );
}

export { saga as settingsSaga }
