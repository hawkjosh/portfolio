import { createGlobalStyle } from 'styled-components'

const breakpoints = {
	mobile: '20rem',
	tablet: '48rem',
	laptop: '80rem',
}

export const responsive = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => `
		@media (min-width: ${breakpoints[label]}) {
			${args.join('')}
		}
	`
	return acc
}, {})

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
