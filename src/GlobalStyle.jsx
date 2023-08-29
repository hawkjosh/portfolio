import { createGlobalStyle } from 'styled-components'

export const breakpoints = {
	sm: '26.75rem',
	md: '48rem',
	lg: '64rem',
	xl: '80rem',
}

export const screen = {
	xs: '(width < 26.75rem)',
	sm: '(26.75rem <= width < 48rem)',
	minSm: '(width >= 48rem)',
	maxSm: '(width < 48rem)',
	md: '(48rem <= width < 64rem)',
	minMd: '(width >= 64rem)',
	maxMd: '(width < 64rem)',
	lg: '(64rem <= width < 80rem)',
	minLg: '(width >= 80rem)',
	maxLg: '(width < 80rem)',
	xl: '(width >= 80rem)',
	portrait: '(orientation: portrait)',
	landscape: '(orientation: landscape)',
	noTouch: '(hover: hover)',
  mobilePortrait: '(width < 48rem) and (max-aspect-ratio: 3/4)',
  mobileLandscape: '(width < 53rem) and (min-aspect-ratio: 2/1)',
  tabletPortrait: '(width < 62.5rem) and (max-aspect-ratio: 9/10)',
  tabletLandscape: '(width < 80rem) and (min-aspect-ratio: 3/2)',
  laptop: '(width >= 80rem)',
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
    -webkit-tap-highlight-color: transparent;
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
