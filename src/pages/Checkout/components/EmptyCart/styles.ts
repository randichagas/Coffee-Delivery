import { ShoppingCart } from 'phosphor-react'
import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const StyledEmptyCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;

  text-align: center;

  h1 {
    font-size: 1.5rem;
  }
`

export const ContinueShoppingLink = styled(NavLink)`
  padding: 0.75rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  text-decoration: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;

  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const StyledShoppingCart = styled(ShoppingCart)`
  color: ${({ theme }) => theme.colors.white};
  display: block;
`
