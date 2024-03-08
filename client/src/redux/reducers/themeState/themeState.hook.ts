import { useAppDispatch, useAppSelector } from 'src/redux/hooks';
import { RootState } from 'src/redux/store';
import { setThemeLight } from './themeState.reducer';

export const getThemeLight = (state: RootState) => state.theme.isDark;

export const useGetThemeIsDark = () => {
  return useAppSelector(getThemeLight);
};

export const useSetThemeLight = () => {
  const dispatch = useAppDispatch();

  return (isDark: boolean) => dispatch(setThemeLight(isDark));
};
