import { IThemeColor } from 'src/types/theme';

export const defaultLight: IThemeColor = {
  isDark: false,
  background: {
    default: '#fefbff',
  },
  onBackground: {
    default: '#1b1b1f',
    opacity0_08: 'rgba(27, 27, 31, 0.08)',
    opacity0_12: 'rgba(27, 27, 31, 0.12)',
    opacity0_38: 'rgba(27, 27, 31, 0.38)',
  },
  primary: {
    default: '#0156d0',
    opacity0_05: 'rgba(1, 86, 208, 0.05)',
    opacity0_08: 'rgba(1, 86, 208, 0.08)',
    opacity0_12: 'rgba(1, 86, 208, 0.12)',
    opacity0_16: 'rgba(1, 86, 208, 0.16)',
  },
  onPrimary: {
    default: '#ffffff',
    opacity0_08: 'rgba(255, 255, 255, 0.08)',
    opacity0_12: 'rgba(255, 255, 255, 0.12)',
    opacity0_16: 'rgba(255, 255, 255, 0.16)',
  },
  inversePrimary: { default: '#b1c5ff' },
  secondaryContainer: { default: '#dae2ff' },
  surfaceVariant: { default: '#e1e2ec' },
  onSurfaceVariant: { default: '#44464f' },
  outline: { default: '#757780' },
  outlineVariant: {
    default: '#c5c6d0',
    opacity0_12: 'rgba(197, 198, 208, 0.12)',
  },
  error: {
    default: '#ba1a1a',
    opacity0_08: 'rgba(186, 26, 26, 0.08)',
    opacity0_12: 'rgba(186, 26, 26, 0.12)',
    opacity0_16: 'rgba(186, 26, 26, 0.16)',
  },
  onError: { default: '#ffffff' },
  errorContainer: { default: '#ffdad6' },
};
