export interface IThemeColor {
  isDark: boolean;
  background: { default: string };
  onBackground: {
    default: string;
    opacity0_08: string;
    opacity0_12: string;
    opacity0_38: string;
  };
  primary: {
    default: string;
    opacity0_05: string;
    opacity0_08: string;
    opacity0_12: string;
    opacity0_16: string;
  };
  onPrimary: {
    default: string;
    opacity0_08: string;
    opacity0_12: string;
    opacity0_16: string;
  };
  inversePrimary: { default: string };
  secondaryContainer: { default: string };
  surfaceVariant: {
    default: string;
  };
  onSurfaceVariant: { default: string };
  outline: { default: string };
  outlineVariant: {
    default: string;
    opacity0_12: string;
  };
  error: {
    default: string;
    opacity0_08: string;
    opacity0_12: string;
    opacity0_16: string;
  };
  errorContainer: { default: string };
}
