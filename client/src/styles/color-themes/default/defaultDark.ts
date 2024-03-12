import { IThemeColor } from 'src/types/theme';

export const defaultDark: IThemeColor = {
  background: {
    default: '#1b1b1f',
  },
  onBackground: {
    default: '#e4e2e6',
    opacity0_08: 'rgba(228, 226, 230, 0.08)',
  },
  primary: {
    default: '#b1c5ff',
  },
  onPrimary: {
    default: '#002c72',
    opacity0_12: 'rgba(0, 44, 114, 0.12)',
  },
  surfaceVariant: { default: '#44464f' },
  onSurfaceVariant: { default: '#c5c6d0' },
  outline: { default: '#8f9099' },
  outlineVariant: {
    default: '#44464f',
    opacity0_12: 'rgba(68, 70, 79, 0.12)',
  },
};
