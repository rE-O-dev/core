import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  /* Reset styles */
  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed, 
  figure, figcaption, footer, header, hgroup, 
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure, 
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }

  input {
    background: transparent;
    margin: 0;
    border: none;
    padding: 0;

    appearance: none;
  }

  button {
    appearance: none;
    background: none;
    margin: 0;
    border: none;
    border-radius: 0;
    padding: 0;
    outline: none;
    cursor: pointer;

    text-align: center;

    &:disabled {
      cursor: default;
    }
  }
  
  /* Custom global colors */
  :root {
    --font: ${(props) => props.theme.font};
    --red-1: ${(props) => props.theme.red1};
    --red-2: ${(props) => props.theme.red2};
    --red-3: ${(props) => props.theme.red3};
    --red-4: ${(props) => props.theme.red4};
    --red-5: ${(props) => props.theme.red5};
    --red-6: ${(props) => props.theme.red6};
    --red-7: ${(props) => props.theme.red7};
    --red-8: ${(props) => props.theme.red8};
    --red-9: ${(props) => props.theme.red9};
    --red-10: ${(props) => props.theme.red10};
    --volcano-1: ${(props) => props.theme.volcano1};
    --volcano-2: ${(props) => props.theme.volcano2};
    --volcano-3: ${(props) => props.theme.volcano3};
    --volcano-4: ${(props) => props.theme.volcano4};
    --volcano-5: ${(props) => props.theme.volcano5};
    --volcano-6: ${(props) => props.theme.volcano6};
    --volcano-7: ${(props) => props.theme.volcano7};
    --volcano-8: ${(props) => props.theme.volcano8};
    --volcano-9: ${(props) => props.theme.volcano9};
    --volcano-10: ${(props) => props.theme.volcano10};
    --orange-1: ${(props) => props.theme.orange1};
    --orange-2: ${(props) => props.theme.orange2};
    --orange-3: ${(props) => props.theme.orange3};
    --orange-4: ${(props) => props.theme.orange4};
    --orange-5: ${(props) => props.theme.orange5};
    --orange-6: ${(props) => props.theme.orange6};
    --orange-7: ${(props) => props.theme.orange7};
    --orange-8: ${(props) => props.theme.orange8};
    --orange-9: ${(props) => props.theme.orange9};
    --orange-10: ${(props) => props.theme.orange10};
    --gold-1: ${(props) => props.theme.gold1};
    --gold-2: ${(props) => props.theme.gold2};
    --gold-3: ${(props) => props.theme.gold3};
    --gold-4: ${(props) => props.theme.gold4};
    --gold-5: ${(props) => props.theme.gold5};
    --gold-6: ${(props) => props.theme.gold6};
    --gold-7: ${(props) => props.theme.gold7};
    --gold-8: ${(props) => props.theme.gold8};
    --gold-9: ${(props) => props.theme.gold9};
    --gold-10: ${(props) => props.theme.gold10};
    --yellow-1: ${(props) => props.theme.yellow1};
    --yellow-2: ${(props) => props.theme.yellow2};
    --yellow-3: ${(props) => props.theme.yellow3};
    --yellow-4: ${(props) => props.theme.yellow4};
    --yellow-5: ${(props) => props.theme.yellow5};
    --yellow-6: ${(props) => props.theme.yellow6};
    --yellow-7: ${(props) => props.theme.yellow7};
    --yellow-8: ${(props) => props.theme.yellow8};
    --yellow-9: ${(props) => props.theme.yellow9};
    --yellow-10: ${(props) => props.theme.yellow10};
    --lime-1: ${(props) => props.theme.lime1};
    --lime-2: ${(props) => props.theme.lime2};
    --lime-3: ${(props) => props.theme.lime3};
    --lime-4: ${(props) => props.theme.lime4};
    --lime-5: ${(props) => props.theme.lime5};
    --lime-6: ${(props) => props.theme.lime6};
    --lime-7: ${(props) => props.theme.lime7};
    --lime-8: ${(props) => props.theme.lime8};
    --lime-9: ${(props) => props.theme.lime9};
    --lime-10: ${(props) => props.theme.lime10};
    --green-1: ${(props) => props.theme.green1};
    --green-2: ${(props) => props.theme.green2};
    --green-3: ${(props) => props.theme.green3};
    --green-4: ${(props) => props.theme.green4};
    --green-5: ${(props) => props.theme.green5};
    --green-6: ${(props) => props.theme.green6};
    --green-7: ${(props) => props.theme.green7};
    --green-8: ${(props) => props.theme.green8};
    --green-9: ${(props) => props.theme.green9};
    --green-10: ${(props) => props.theme.green10};
    --cyan-1: ${(props) => props.theme.cyan1};
    --cyan-2: ${(props) => props.theme.cyan2};
    --cyan-3: ${(props) => props.theme.cyan3};
    --cyan-4: ${(props) => props.theme.cyan4};
    --cyan-5: ${(props) => props.theme.cyan5};
    --cyan-6: ${(props) => props.theme.cyan6};
    --cyan-7: ${(props) => props.theme.cyan7};
    --cyan-8: ${(props) => props.theme.cyan8};
    --cyan-9: ${(props) => props.theme.cyan9};
    --cyan-10: ${(props) => props.theme.cyan10};
    --blue-1: ${(props) => props.theme.blue1};
    --blue-2: ${(props) => props.theme.blue2};
    --blue-3: ${(props) => props.theme.blue3};
    --blue-4: ${(props) => props.theme.blue4};
    --blue-5: ${(props) => props.theme.blue5};
    --blue-6: ${(props) => props.theme.blue6};
    --blue-7: ${(props) => props.theme.blue7};
    --blue-8: ${(props) => props.theme.blue8};
    --blue-9: ${(props) => props.theme.blue9};
    --blue-10: ${(props) => props.theme.blue10};
    --geekblue-1: ${(props) => props.theme.geekblue1};
    --geekblue-2: ${(props) => props.theme.geekblue2};
    --geekblue-3: ${(props) => props.theme.geekblue3};
    --geekblue-4: ${(props) => props.theme.geekblue4};
    --geekblue-5: ${(props) => props.theme.geekblue5};
    --geekblue-6: ${(props) => props.theme.geekblue6};
    --geekblue-7: ${(props) => props.theme.geekblue7};
    --geekblue-8: ${(props) => props.theme.geekblue8};
    --geekblue-9: ${(props) => props.theme.geekblue9};
    --geekblue-10: ${(props) => props.theme.geekblue10};
    --purple-1: ${(props) => props.theme.purple1};
    --purple-2: ${(props) => props.theme.purple2};
    --purple-3: ${(props) => props.theme.purple3};
    --purple-4: ${(props) => props.theme.purple4};
    --purple-5: ${(props) => props.theme.purple5};
    --purple-6: ${(props) => props.theme.purple6};
    --purple-7: ${(props) => props.theme.purple7};
    --purple-8: ${(props) => props.theme.purple8};
    --purple-9: ${(props) => props.theme.purple9};
    --purple-10: ${(props) => props.theme.purple10};
    --magenta-1: ${(props) => props.theme.magenta1};
    --magenta-2: ${(props) => props.theme.magenta2};
    --magenta-3: ${(props) => props.theme.magenta3};
    --magenta-4: ${(props) => props.theme.magenta4};
    --magenta-5: ${(props) => props.theme.magenta5};
    --magenta-6: ${(props) => props.theme.magenta6};
    --magenta-7: ${(props) => props.theme.magenta7};
    --magenta-8: ${(props) => props.theme.magenta8};
    --magenta-9: ${(props) => props.theme.magenta9};
    --magenta-10: ${(props) => props.theme.magenta10};
    --gray-1: ${(props) => props.theme.gray1};
    --gray-2: ${(props) => props.theme.gray2};
    --gray-3: ${(props) => props.theme.gray3};
    --gray-4: ${(props) => props.theme.gray4};
    --gray-5: ${(props) => props.theme.gray5};
    --gray-6: ${(props) => props.theme.gray6};
    --gray-7: ${(props) => props.theme.gray7};
    --gray-8: ${(props) => props.theme.gray8};
    --gray-9: ${(props) => props.theme.gray9};

  }
`;
