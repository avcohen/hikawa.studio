import * as React from 'react'
import styled, { css } from '@xstyled/styled-components'

export const MainImage = styled.img``

export const HoverImageWrapper = styled.picture`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s;
`

export const HoverImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const Wrapper = styled.div`
  position: relative;
  text-align: left;
  width: 100%;

  &:hover ${HoverImageWrapper} {
    opacity: 1;
  }
`

interface PictureProps {
  loaded: boolean
  objectFit?: string
}

export const Picture = styled.picture<PictureProps>`
  ${({ loaded, objectFit }) => css`
    max-height: 100%;
    max-width: 100%;
    width: auto;
    background-color: transparent;
    display: block;

    & > ${MainImage} {
      opacity: ${loaded ? 1 : 0};
      transition: 0.3s;
      transition-delay: 0.3s;
      max-width: 100%;
      object-fit: ${objectFit || 'cover'};
      display: block;
    }
  `}
`

export const PreloadWrapper = styled.div`
  position: fixed;
  top: -500px;
  left: -500px;
  width: 1px;
  height: 1px;
  opacity: 0;
  pointer-events: none;
  z-index: -100;
`

export const RatioImageFill = styled.div`
  display: block;

  & + picture > img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`
