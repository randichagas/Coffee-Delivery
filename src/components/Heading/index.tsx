import styled, { css } from 'styled-components'

import { defaultTheme } from '../../styles/themes/default'

interface HeadingProps {
  level: 1 | 2 | 3
  size: keyof typeof defaultTheme.sizes
  color?: keyof typeof defaultTheme.colors
  fontWeight?: 700 | 800
  lineHeight?: '130%' | '160%'
}

export const Heading = styled('h1').attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = 'base-title',
    size,
    fontWeight = 800,
    lineHeight = '130%',
  }) => css`
    font-family: 'Baloo 2', cursive;
    font-weight: ${fontWeight};
    font-size: ${defaultTheme.sizes[size]};
    color: ${defaultTheme.colors[color]};
    line-height: ${lineHeight};
  `}
`
