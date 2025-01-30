import 'styled-components';

import { lightTheme } from './config/themes';

type Theme = typeof lightTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
