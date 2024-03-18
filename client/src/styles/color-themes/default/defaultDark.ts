import { IThemeColor } from 'src/types/theme';

export const defaultDark: IThemeColor = {
  isDark: true,
  background: {
    default: '#1b1b1f',
  },
  onBackground: {
    default: '#e4e2e6',
    opacity0_08: 'rgba(228, 226, 230, 0.08)',
    opacity0_12: 'rgba(228, 226, 230, 0.12)',
    opacity0_38: 'rgba(228, 226, 230, 0.38)',
  },
  primary: {
    default: '#b1c5ff',
    opacity0_05: 'rgba(177, 197, 255, 0.05)',
    opacity0_08: 'rgba(177, 197, 255, 0.08)',
    opacity0_12: 'rgba(177, 197, 255, 0.12)',
    opacity0_16: 'rgba(177, 197, 255, 0.16)',
  },
  onPrimary: {
    default: '#002c72',
    opacity0_08: 'rgba(0, 44, 114, 0.08)',
    opacity0_12: 'rgba(0, 44, 114, 0.12)',
    opacity0_16: 'rgba(0, 44, 114, 0.16)',
  },
  inversePrimary: { default: '#0156d0' },
  secondaryContainer: { default: '#3c4661' },
  surfaceVariant: { default: '#44464f' },
  onSurfaceVariant: { default: '#c5c6d0' },
  outline: { default: '#8f9099' },
  outlineVariant: {
    default: '#44464f',
    opacity0_12: 'rgba(68, 70, 79, 0.12)',
  },
  error: {
    default: '#ffb4ab',
    opacity0_08: 'rgba(255, 180, 171, 0.08)',
    opacity0_12: 'rgba(255, 180, 171, 0.12)',
    opacity0_16: 'rgba(255, 180, 171, 0.16)',
  },
  onError: { default: '#690005' },
  errorContainer: { default: '#93000a' },
};
