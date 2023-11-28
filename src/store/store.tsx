import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './state';

export const store = configureStore({
  reducer: {
    data: dataReducer
  }
});