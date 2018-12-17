// @flow
import styled, { css } from 'styled-components'

const commonHeaderStyles = css`
	${({ theme, align, weight, color, family }) => `
		font-weight: ${theme.type.weight[weight] || family === 'serif' ? theme.type.weight.normal : theme.type.weight.semi};
		font-family: ${theme.type.fontFamily[family] || theme.type.fontFamily.sans};
		color: ${theme.color[color] || 'inherit'};
		text-align: ${align || 'inherit'};
		margin: 0.3em 0;

		&:first-child {
			margin-top: 0;
		}
		
		&:last-child {
			margin-bottom: 0;
		}

	`};
`

export const Header1 = styled.h1`
	${commonHeaderStyles};
	${({ theme }) => css`
		font-size: ${theme.type.size.h1};
		font-family: ${theme.type.fontFamily.serif};
		font-weight: ${theme.type.weight.normal};
		${theme.media.queries.tablet`font-size: calc(${theme.type.size.h1} * 0.8)`};
		${theme.media.queries.phone`font-size: calc(${theme.type.size.h1} * 0.7)`};
	`};
`

export const Header2 = styled.h2`
	${commonHeaderStyles};
	${({ theme }) => css`
		font-size: ${theme.type.size.h2};
		font-family: ${theme.type.fontFamily.serif};
		font-weight: ${theme.type.weight.normal};
		${theme.media.queries.tablet`font-size: calc(${theme.type.size.h2} * 0.8);`}
		${theme.media.queries.phone`font-size: calc(${theme.type.size.h2} * 0.7);`}
	`};
`

export const Header3 = styled.h3`
	${commonHeaderStyles};
	${({ theme }) => css`
		font-size: ${theme.type.size.h3};

		${theme.media.queries.tablet`font-size: calc(${theme.type.size.h3} * 0.8);`}
		${theme.media.queries.phone`font-size: calc(${theme.type.size.h3} * 0.7);`}
	`};
`

export const Header4 = styled.h4`
	${commonHeaderStyles};
	${({ theme }) => css`
		font-size: ${theme.type.size.h4};

		${theme.media.queries.tablet`font-size: calc(${theme.type.size.h4} * 0.8);`}
	`};
`

export const Header5 = styled.h5`
	${commonHeaderStyles};
	${({ theme }) => css`
		font-size: ${theme.type.size.h5};
	`};
`

export const Header6 = styled.h6`
	${commonHeaderStyles};
	${({ theme }) => css`
		font-size: ${theme.type.size.h6};
	`};
`

export const P = styled.p`
	${({ theme, align }) => css`
		text-align: ${align || 'inherit'};
		margin: 0.5em 0;
		font-size: ${theme.type.size.p};

		&:after {
			content: '\00a0\00a0';
		}

		&:first-child {
			margin-top: 0;
		}

		&:last-child {
			margin-bottom: 0;
		}
	`};
`

export const TextAnchor = styled.a`
	${({ theme }) => `
		color: ${theme.color.pink};
	`};
`

export const BlockQuote = styled.blockquote``

const listStyles = css`
	${({ theme }) => `
		margin: ${theme.layout.spacing.single} 0;
		padding-left: 2em;
	`};
`

export const Ol = styled.ol`
	${listStyles};
`

export const Ul = styled.ul`
	${listStyles};
`

export const Li = styled.li`
	& > ${Ol}, & > ${Ul} {
		margin: 0;
	}
`
