import { IThemeColor } from 'src/types/theme';

export const defaultLight: IThemeColor = {
  background: {
    default: '#fefbff',
  },
  onBackground: {
    default: '#1b1b1f',
    opacity0_08: 'rgba(27, 27, 31, 0.08)',
  },
  primary: {
    default: '#0156d0',
  },
  onPrimary: {
    default: '#ffffff',
    opacity0_12: 'rgba(255, 255, 255, 0.12)',
  },
  surfaceVariant: { default: '#e1e2ec' },
  onSurfaceVariant: { default: '#44464f' },
  outline: { default: '#757780' },
  outlineVariant: {
    default: '#c5c6d0',
    opacity0_12: 'rgba(197, 198, 208, 0.12)',
  },
};
