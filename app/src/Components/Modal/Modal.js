// @flow
import * as React from 'react'
import styled from 'styled-components'
import { useLockScroll } from '../LockScroll'

const { useEffect } = React

export const ModalInner = styled.div`
	${({ theme }) => `
		background-color: white;
		border: 1px solid lightGray;
		padding: 20px;
		box-shadow: 6px 6px 0 rgba(0, 0, 0, 0.4);
		z-index: ${theme.layout.z.dialog};
		pointer-events: initial;
		margin: 50px auto;
		width: calc(100vw - ${theme.layout.spacing.single});
		max-width: 650px;
max-height: calc(100vh - 100px);
overflow-y: scroll;
	`};
`

const Background = styled.button`
	${({ theme }) => `
		${theme.mixins.fixedFullSize};
		cursor: pointer;
	   z-index: ${theme.layout.z.dialog - 1};
		background-color: rgba(50, 50, 50, 0.4);
	`};
`

export const ModalContainer = styled.div`
	${({ theme }) => `
		${theme.mixins.fixedFullSize};
		${theme.mixins.flexCenter};
		z-index: ${theme.layout.z.dialog};
		pointer-events: none;
	`};
`

type Props = {
	children?: React.Node,
	onBackgroundClick: () => void,
	open: boolean,
}

const Modal = ({ children, onBackgroundClick, open }: Props) => {
	const { lockScroll, unlockScroll } = useLockScroll()
	useEffect(() => {
		if (open) {
			lockScroll()
		} else {
			unlockScroll()
		}
	}, [open])
	return open && children ? (
		<>
			<Background onClick={onBackgroundClick} />
			<ModalContainer>
				<ModalInner>{children}</ModalInner>
			</ModalContainer>
		</>
	) : null
}

Modal.defaultProps = { children: null }

export default Modal
