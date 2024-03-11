import { IThemeColor } from 'src/types/theme/IThemeColor';
import { defaultDark, defaultLight } from './color-themes/default';
import { ICommon, common } from './consts/common';
import { IFont, font } from './consts/font';
import { ISize, size } from './consts/size';

export interface ITheme {
  color: IThemeColor;
  font: IFont;
  size: ISize;
  common: ICommon;
}

export const theme = (isDark: boolean): ITheme => ({
  color: isDark ? defaultDark : defaultLight,
  font,
  size,
  common,
});
