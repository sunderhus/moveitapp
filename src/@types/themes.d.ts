import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;

    colors: {
      primary: string;
      secundary: string;
      terciary: string;

      background: string;
      text: string;
      title: string;
      cardBackground: string;
      countdownButtonBackGround: string;
      overlay: string;
      challengeBoxBackground: string;
    };
  }
}
