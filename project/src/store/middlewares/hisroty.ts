import {PayloadAction} from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import {Middleware} from 'redux';
import { Action } from '../action';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

export const history: Middleware<unknown, Reducer> =
  () =>
    (next) =>
      (action: PayloadAction<string>) => {
        if (action.type === Action.REDIRECT_TO_ROUTE) {
          browserHistory.push(action.payload);
        }

        return next(action);
      };
