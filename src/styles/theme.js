import { extendTheme } from 'native-base';

export const Theme = extendTheme({
  colors: {
    primary: {
      700: '#996DFF',
    },
    secondary: {
      700: '#FBA94C',
    },
    green: {
      700: '#00875F',
      500: '#00B37E',
      300: '#04D361',
    },
    gray: {
      700: '#121214',
      700: '#202024',
      700: '#29292E',
      700: '#323238',
      700: '#7C7C8A',
      700: '#C4C4CC',
      700: '#E1E1E6',
    },
    white: '#FFFFFF',
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56,
  },
});
