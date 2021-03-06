import { injectGlobal } from 'styled-components';

import * as Fonts from './assets/fonts';

/* eslint no-unused-expressions: 0 */
injectGlobal`
  @font-face {
    font-family: 'RobotoLight';
    src: url(${Fonts.RobotoLight}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'RobotoThin';
    src: url(${Fonts.RobotoThin}) format('truetype');
    font-weight: lighter;
  }
,
  html, body, [data-reactroot] {
    height: 100%;
  }

  body {
    font-family: 'RobotoLight', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  body.fontLoaded {
    font-family: 'RobotoLight', 'Open Sans', 'Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  a {
    text-decoration: none;
    color: #c6c6c6;

    &:visited {
      color: #c6c6c6;
    }

    &:active, &:focus, &:hover {
      color: #fafafa;
      text-decoration: none;
    }
  }

  button {
    &:hover {
      cursor: pointer;
    }
  }

  p, a,
  label,
  h1, h2, h3, h4, h5, h6,
  input, textarea, select, button {
    font-family: RobotoLight;
    font-size: inherit;
  }

#app {
  min-height: 100%;
  min-width: 100%;
}

`;

