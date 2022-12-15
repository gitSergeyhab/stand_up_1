import { createAction } from '@reduxjs/toolkit';
import { ContentName } from '../const/const';
import { Titles } from '../types/types';
import { AuthUserTypeCC } from '../types/user-types';

export const enum Action {
  SetType = 'main/SetType',
  SetTitles = 'main/SetTitles',
  SetUser = 'main/SetUser'

}

export const setType = createAction(Action.SetType, (type: null | ContentName) => ({payload: type}));
export const setTitles = createAction(Action.SetTitles, (type: Titles) => ({payload: type}));
export const setUser = createAction(Action.SetUser, (user: AuthUserTypeCC | null) => ({payload: user}));

