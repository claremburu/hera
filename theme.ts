import { DefaultTheme } from 'react-native-paper';

const colors = {
  primary: '#007AFF',
  secondary: '#FFC107',
  text: {
    primary: '#333333',
    secondary: '#666666',
  },
  background: {
    primary: '#FFFFFF',
    secondary: '#F2F2F2',
  },
};

const fonts = {
  regular: 'Roboto-Regular',
  medium: 'Roboto-Medium',
  light: 'Roboto-Light',
};

const spacing = {
  xs: 4,
  s: 8,
  m: 16,
  l: 24,
  xl: 32,
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    ...colors,
  },
  fonts,
  spacing,
};

export default theme;
