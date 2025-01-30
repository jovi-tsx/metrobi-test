import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  /* Box sizing rules */
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Remove default margin and padding */
  html,
  body,
  div,
  span,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
    vertical-align: baseline;
  }

  /* Set core body defaults */
  body {
    max-width: 100dvw;
    font-family: ${({ theme }) => theme.fontFamily};
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
  }

  /* Remove list styles on ul, ol elements */
  ul,
  ol {
    list-style: none;
  }

  /* Remove default hyperlink styles */
  a {
    color: inherit;
    text-decoration: none;
  }

  /* Make images easier to work with */
  img,
  picture,
  video,
  canvas,
  svg {
    max-width: 100%;
    display: block;
  }

  /* Inherit fonts for inputs and buttons */
  input,
  button,
  textarea,
  select {
    font: inherit;
  }

  /* Remove all animations and transitions for people who prefer not to see them */
  @media (prefers-reduced-motion: reduce) {
    *,
    *::before,
    *::after {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !important;
      scroll-behavior: auto !important;
    }
  }

  /* Remove default table spacing */
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  /* Reset form elements */
  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    padding: 0;
    border: none;
    background: none;
    font-family: inherit;
    font-size: inherit;
    color: inherit;
    line-height: inherit;
  }

  /* Remove focus outlines for non-keyboard users */
  button:focus,
  input:focus,
  select:focus,
  textarea:focus {
    outline: none;
  }

  /* Reset button styles */
  button {
    cursor: pointer;
    background: none;
    border: none;
  }

  /* Remove default fieldset styles */
  fieldset {
    margin: 0;
    padding: 0;
    border: none;
  }

  /* Remove default legend styles */
  legend {
    padding: 0;
  }

  @media (min-height: 575) {
    height: 100dvh;
  }
`;
