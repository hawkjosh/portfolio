import { createGlobalStyle } from 'styled-components'

// const breakpoints = {
// 	mobile: '20rem',
// 	tablet: '48rem',
// 	laptop: '80rem',
// }

// export const responsive = Object.keys(breakpoints).reduce((acc, label) => {
// 	acc[label] = (...args) => `
// 		@media (min-width: ${breakpoints[label]}) {
// 			${args.join('')}
// 		}
// 	`
// 	return acc
// }, {})

const breakpoints = {
	mobilePort: '428px',
	tabletSmPort: '768px',
	tabletLgPort: '820px',
	mobileLand: '832px',
	tabletSmLand: '1024px',
	tabletLgLand: '1180px',
	LaptopSm: '1280px',
	LaptopLg: '1440px',
}

export const devices = {
	mobilePort: `(min-width: ${breakpoints.mobilePort}) and (orientation: portrait)`,
	tabletSmPort: `(min-width: ${breakpoints.tabletSmPort}) and (orientation: portrait)`,
	tabletLgPort: `(min-width: ${breakpoints.tabletLgPort}) and (orientation: portrait)`,
	mobileLand: `(min-width: ${breakpoints.mobileLand}) and (orientation: landscape)`,
	tabletSmLand: `(min-width: ${breakpoints.tabletSmLand}) and (orientation: landscape)`,
	tabletLgLand: `(min-width: ${breakpoints.tabletLgLand}) and (orientation: landscape)`,
	LaptopSm: `(min-width: ${breakpoints.LaptopSm})`,
	LaptopLg: `(min-width: ${breakpoints.LaptopLg})`,
}

export const GlobalStyle = createGlobalStyle`
  :root {
    --font-primary: 'Open Sans', sans-serif;
    --font-color: hsla(0, 100%, 100%, 1);
    --color-primary: hsla(168, 76%, 42%, 1);
    --color-secondary: hsla(211, 30%, 24%, 1);
  }

  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  *::-webkit-scrollbar {
    display: none;
  }

  html {
    height: 100%;
    scrollbar-width: none;

    & body {
      width: 100%;
      min-height: 100vh;
      min-height: 100dvh;
      font-family: var(--font-primary);
      color: var(--font-color);
      background: var(--color-primary);
      overflow-x: hidden;

      & a {
        color: var(--font-color);
        text-decoration: none;
      }
    }
  }
`
