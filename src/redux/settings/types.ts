export enum SettingsActionTypes {
  UPDATE_SETTINGS = '@@settings/UPDATE_SETTINGS',
  UPDATE_SETTINGS_ASYNC = '@@settings/UPDATE_SETTINGS_ASYNC',
  UPDATE_SETTINGS_LOADING = '@@settings/UPDATE_SETTINGS_LOADING',
}

export interface SettingsState {
  debug: boolean;
  env: string;
  local: boolean;
  log_level: number;
  production: boolean;
  project_code_name: string;
  project_name: string;
  proxy_url: string;
  loading?: boolean;
}
