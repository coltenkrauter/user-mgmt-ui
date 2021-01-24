import { Reducer } from 'redux'
import { SettingsState, SettingsActionTypes } from './types'

// Type-safe initialState!
export const initialState: SettingsState = {
  debug: false,
  env: '',
  local: false,
  log_level: 0,
  production: false,
  project_code_name: '',
  project_name: '',
  proxy_url: '',
  loading: true,
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<SettingsState> = (state = initialState, action) => {
  switch (action.type) {
    case SettingsActionTypes.UPDATE_SETTINGS_ASYNC: {
      return {
        ...state,
        ...action.payload
      }
    } case SettingsActionTypes.UPDATE_SETTINGS_LOADING: {
      return {
        ...state,
        loading: action.payload,
      }
    } default: {
      return state
    }
  }
}

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as settingsReducer }
