import { IContent } from 'src/types/theme/IContent';
import { IColor, color } from './consts/color';
import { ICommon, common } from './consts/common';
import { IFont, font } from './consts/font';
import { ISize, size } from './consts/size';
import { defaultLight } from './color-themes/defaultLight';

export interface ITheme {
  color: {
    content: IContent;
  };
  font: IFont;
  size: ISize;
  common: ICommon;
}

export const theme = (isDark: boolean): ITheme => ({
  color: defaultLight,
  font,
  size,
  common,
});
