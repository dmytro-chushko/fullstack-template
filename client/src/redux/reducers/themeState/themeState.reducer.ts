import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IThemeReducer } from 'src/types/reducer';
import { ReducerPass } from 'src/utils/consts';

const initialState: IThemeReducer = {
  isDark: false,
};

export const themeState = createSlice({
  name: ReducerPass.THEME,
  initialState,
  reducers: {
    setThemeLight(state, action: PayloadAction<boolean>) {
      state.isDark = action.payload;
    },
  },
});

export const { setThemeLight } = themeState.actions;
