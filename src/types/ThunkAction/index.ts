import {Dispatch} from 'redux';
import AppState from 'store/types';

export type AsyncThunkActionType<T> = (dispatch: Dispatch, getState: () => AppState) => Promise<T>;

export type ThunkActionType<T> = (dispatch: Dispatch, getState: () => AppState) => T;
