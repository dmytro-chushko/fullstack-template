import { ICommon, common } from './consts/common';
import { IFont, font } from './consts/font';
import { ISize, size } from './consts/size';
import { defaultDark, defaultLight } from './color-themes/default';
import { IThemeColor } from 'src/types/IThemeColor';

export interface ITheme {
  color: IThemeColor;
  font: IFont;
  size: ISize;
  common: ICommon;
}

export const theme = (isDark: boolean): ITheme => ({
  color: isDark ? defaultLight : defaultDark,
  font,
  size,
  common,
});
