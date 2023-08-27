import * as Styled from './styles/Home.styled.jsx'

import { useWindowSize } from '../../hooks/useWindowSize.jsx'

export const Home = () => {
	const {
		isMobilePortrait,
		isMobileLandscape,
		isTabletPortrait,
		isTabletLandscape,
		isLaptop,
		isPortrait,
		isLandscape,
		isHover,
		isWidthXs,
		isWidthSm,
		isWidthMd,
		isWidthLg,
		isWidthXl,
	} = useWindowSize()
	return (
		<Styled.Container>
			{isMobilePortrait && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'black',
						paddingBottom: '0.5rem',
					}}>
					Device Type:{' '}
					<span style={{ textDecoration: 'underline' }}>MOBILE PORTRAIT</span>
				</div>
			)}
			{isMobileLandscape && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'black',
						paddingBottom: '0.5rem',
					}}>
					Device Type:{' '}
					<span style={{ textDecoration: 'underline' }}>MOBILE LANDSCAPE</span>
				</div>
			)}
			{isTabletPortrait && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'black',
						paddingBottom: '0.5rem',
					}}>
					Device Type:{' '}
					<span style={{ textDecoration: 'underline' }}>TABLET PORTRAIT</span>
				</div>
			)}
			{isTabletLandscape && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'black',
						paddingBottom: '0.5rem',
					}}>
					Device Type:{' '}
					<span style={{ textDecoration: 'underline' }}>TABLET LANDSCAPE</span>
				</div>
			)}
			{isLaptop && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'black',
						paddingBottom: '0.5rem',
					}}>
					Device Type:{' '}
					<span style={{ textDecoration: 'underline' }}>LAPTOP/DESKTOP</span>
				</div>
			)}
			{isWidthXs && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'yellow',
						paddingBottom: '0.5rem',
					}}>
					Breakpoint Width:{' '}
					<span style={{ textDecoration: 'underline' }}>EXTRA SMALL</span>
				</div>
			)}
			{isWidthSm && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'yellow',
						paddingBottom: '0.5rem',
					}}>
					Breakpoint Width:{' '}
					<span style={{ textDecoration: 'underline' }}>SMALL</span>
				</div>
			)}
			{isWidthMd && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'yellow',
						paddingBottom: '0.5rem',
					}}>
					Breakpoint Width:{' '}
					<span style={{ textDecoration: 'underline' }}>MEDIUM</span>
				</div>
			)}
			{isWidthLg && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'yellow',
						paddingBottom: '0.5rem',
					}}>
					Breakpoint Width:{' '}
					<span style={{ textDecoration: 'underline' }}>LARGE</span>
				</div>
			)}
			{isWidthXl && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'yellow',
						paddingBottom: '0.5rem',
					}}>
					Breakpoint Width:{' '}
					<span style={{ textDecoration: 'underline' }}>EXTRA LARGE</span>
				</div>
			)}
			{isHover ? (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.125rem',
						fontWeight: 'bold',
						color: 'orangered',
					}}>
					Device Type:{' '}
					<span style={{ textDecoration: 'underline' }}>NON-MOBILE</span>
				</div>
			) : (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.125rem',
						fontWeight: 'bold',
						color: 'orangered',
					}}>
					Device Type:{' '}
					<span style={{ textDecoration: 'underline' }}>MOBILE</span>
				</div>
			)}
			{isPortrait && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.5rem',
						fontWeight: 'bold',
						color: 'rebeccapurple',
						paddingBottom: '0.5rem',
					}}>
					Orientation:{' '}
					<span style={{ textDecoration: 'underline' }}>PORTRAIT</span>
				</div>
			)}
			{isLandscape && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.5rem',
						fontWeight: 'bold',
						color: 'rebeccapurple',
						paddingBottom: '0.5rem',
					}}>
					Orientation:{' '}
					<span style={{ textDecoration: 'underline' }}>LANDSCAPE</span>
				</div>
			)}

			<Styled.Image
				src='/avatar.svg'
				alt='My Avatar'
			/>
			<Styled.Wrapper>
				<Styled.Divider />
			</Styled.Wrapper>
			<Styled.IconsContainer>
				<Styled.Icon type='laptop' />
				<Styled.Icon type='superhero' />
				<Styled.Icon type='tennessee' />
			</Styled.IconsContainer>
		</Styled.Container>
	)
}
