import { color } from './color';

export const common = {
  transition: 'all ease-in-out 0.2s',
  inputBorderRadius: '0.375rem',
  borderRadius: '0.5rem',
  innerBorderRadius: '0.25rem',
  inputBorder: `0 0.125rem 0.125rem -0.125rem ${color.black}`,
  inputBoxShadowSize: `0 0 0 0.25rem`,
  errorInputBorder: `0 0.125rem 0.125rem -0.125rem ${color.error}`,
  searchInputBorder: `0 0 0 0.125rem ${color.secondary}`,
  errorSearchInputBorder: `0 0 0 0.125rem ${color.error}`,
  focusedSearchInputBorder: `0 0 0 0.125rem ${color.active}`,
  labelBorder: `0 0 0 0.125rem ${color.secondary}`,
  loader: {
    color: '#8A8A8E',
    strokeWidth: '5',
    duration: '0.75',
    width: '200',
  },
};

export type ICommon = typeof common;
