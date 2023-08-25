import * as Styled from './styles/Home.styled.jsx'

import { useWindowSize } from '../../hooks/useWindowSize.jsx'

export const Home = () => {
	const {
		isMobile,
		isTablet,
		isLaptop,
		isWideScreen,
		isShortScreen,
		isPortrait,
		isHover,
		isMobilePortrait,
		isMobileLandscape
	} = useWindowSize()
	return (
		<Styled.Container>
			{isPortrait ? (
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
			) : (
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
			{isMobile && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'yellow',
						paddingBottom: '0.5rem',
					}}>
					Viewport Width:{' '}
					<span style={{ textDecoration: 'underline' }}>MOBILE</span>
				</div>
			)}
			{isTablet && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'yellow',
						paddingBottom: '0.5rem',
					}}>
					Viewport Width:{' '}
					<span style={{ textDecoration: 'underline' }}>TABLET</span>
				</div>
			)}
			{isLaptop && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						color: 'yellow',
						paddingBottom: '0.5rem',
					}}>
					Viewport Width:{' '}
					<span style={{ textDecoration: 'underline' }}>LAPTOP</span>
				</div>
			)}
			{isWideScreen && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						fontStyle: 'italic',
						color: 'blue',
					}}>
					Special Screen Mode:{' '}
					<span style={{ textDecoration: 'underline' }}>WIDESCREEN</span>
				</div>
			)}
			{isShortScreen && (
				<div
					style={{
						textAlign: 'center',
						fontSize: '1.25rem',
						fontStyle: 'italic',
						color: 'blue',
					}}>
					Special Screen Mode:{' '}
					<span style={{ textDecoration: 'underline' }}>SHORTSCREEN</span>
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
