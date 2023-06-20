import styled from 'styled-components'

import { NavLink } from 'react-router-dom'

const StyledContainer = styled.div`
  height: 100dvh;
	display: flex;
	flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
`

const StyledTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
  align-items: center;
  gap: 0.75rem;
`

const StyledTextOne = styled.h2`
	font-size: 1.625rem;
`

const StyledTextTwo = styled.h4`
  font-size: 1.0625rem;
	font-weight: 400;
`

const StyledButton = styled(NavLink)`
	background: hsla(360, 100%, 100%, 1);
	border-radius: 1.5rem;
	cursor: pointer;
	font-size: 1.5rem;
	color: var(--color-primary);
	padding: 0.5rem 0.75rem;
	line-height: 1.5;
	text-transform: uppercase;
	font-weight: 500;
`

export {
	StyledContainer,
	StyledTextWrapper,
	StyledTextOne,
	StyledTextTwo,
	StyledButton,
}
