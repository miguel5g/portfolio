/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      title: string;
      text: string;
      textLight: string;
      background: string;
    }
  }
}
