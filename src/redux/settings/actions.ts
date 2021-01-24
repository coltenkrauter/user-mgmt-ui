import { action } from 'typesafe-actions';

import { SettingsActionTypes } from './types';

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions
//
// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.

export const updateSettings = () => action(SettingsActionTypes.UPDATE_SETTINGS);
export const updateSettingsAsync = (settings: any) => action(SettingsActionTypes.UPDATE_SETTINGS_ASYNC, settings);
export const updateSettingsLoading = (loading: boolean) => action(SettingsActionTypes.UPDATE_SETTINGS_LOADING, loading);
