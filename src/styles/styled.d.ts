import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius?: string;
    mobile?:string;

    colors?: {
      header?:string;
      body?:string;
      footer?:string;
      main?: string;
      secondary?: string;
      icons?:string;
    };
    size?:{
      icons?:string;
    }
  }
}