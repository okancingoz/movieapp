import {Dimensions} from 'react-native';

interface Size {
  width: number;
  height: number;
}

export const DIMENSIONS: Size = {
  width: Dimensions.get('window').width,
  height: Dimensions.get('window').height,
};

interface Spacing {
  space_4: number;
  space_8: number;
  space_12: number;
  space_16: number;
  space_20: number;
  space_24: number;
  space_32: number;
  space_40: number;
}
export const SPACING: Spacing = {
  space_4: 4,
  space_8: 8,
  space_12: 12,
  space_16: 16,
  space_20: 20,
  space_24: 24,
  space_32: 32,
  space_40: 40,
};

interface Color {
  Black: string;
  BlackRGB10: string;
  Orange: string;
  OrangeRGBA0: string;
  Grey: string;
  DarkGrey: string;
  Yellow: string;
  White: string;
  WhiteRGBA75: string;
  WhiteRGBA50: string;
  WhiteRGBA32: string;
  WhiteRGBA15: string;
}

export const COLORS: Color = {
  Black: '#000000',
  BlackRGB10: 'rgba(0,0,0,0.1)',
  Orange: '#ff5524',
  OrangeRGBA0: 'rgba(255,85,36,0)',
  Grey: '#333333',
  DarkGrey: '#0b0b0b',
  Yellow: '#e1cd17',
  White: '#ffffff',
  WhiteRGBA75: 'rgba(255,255,255,0.75)',
  WhiteRGBA50: 'rgba(255,255,255,0.50)',
  WhiteRGBA32: 'rgba(255,255,255,0.32)',
  WhiteRGBA15: 'rgba(255,255,255,0.15)',
};

interface FontFamily {
  poppins_black: string;
  poppins_bold: string;
  poppins_extrabold: string;
  poppins_extralight: string;
  poppins_light: string;
  poppins_medium: string;
  poppins_regular: string;
  poppins_semibold: string;
  poppins_thin: string;
}

export const FONTFAMILY: FontFamily = {
  poppins_black: 'Poopins-Black',
  poppins_bold: 'Poopins-Bold',
  poppins_extrabold: 'Poopins-ExtraBold',
  poppins_extralight: 'Poopins-ExtraLight',
  poppins_light: 'Poopins-Light',
  poppins_medium: 'Poopins-Medium',
  poppins_regular: 'Poopins-Regular',
  poppins_semibold: 'Poopins-SemiBold',
  poppins_thin: 'Poopins-Thin',
};

interface FontSize {
  size_8: number;
  size_10: number;
  size_12: number;
  size_14: number;
  size_16: number;
  size_18: number;
  size_20: number;
  size_24: number;
  size_30: number;
}

export const FONTSIZE: FontSize = {
  size_8: 8,
  size_10: 10,
  size_12: 12,
  size_14: 14,
  size_16: 16,
  size_18: 18,
  size_20: 20,
  size_24: 24,
  size_30: 30,
};

interface BorderRadius {
  radius_4: number;
  radius_8: number;
  radius_12: number;
  radius_16: number;
  radius_20: number;
  radius_24: number;
}

export const BORDERRADIUS: BorderRadius = {
  radius_4: 4,
  radius_8: 8,
  radius_12: 12,
  radius_16: 16,
  radius_20: 20,
  radius_24: 24,
};
