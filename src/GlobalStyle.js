import { createGlobalStyle } from 'styled-components'

const breakpoints = {
	mobile: '20rem',
	tablet: '48rem',
	laptop: '80rem',
}

const responsive = Object.keys(breakpoints).reduce((acc, label) => {
	acc[label] = (...args) => `
		@media (min-width: ${breakpoints[label]}) {
			${args.join('')}
		}
	`
	return acc
}, {})

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,300;1,400;1,500;1,600;1,700;1,800&display=swap');

  :root {
    --font-primary: 'Open Sans', sans-serif;
    --font-color: hsla(0, 0%, 100%, 1);
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
      background-color: var(--color-primary);
      overflow-x: hidden;

      & a {
        color: var(--font-color);
        text-decoration: none;
      }
    }
  }
`

export { responsive, GlobalStyle }
