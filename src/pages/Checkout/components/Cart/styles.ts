import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { ShoppingCart } from 'phosphor-react'

export const StyledCart = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`

export const OrderSummary = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  div {
    display: flex;
    justify-content: space-between;

    span {
      font-size: 0.875rem;
      line-height: 130%;
      color: ${({ theme }) => theme.colors['base-text']};
    }

    strong {
      font-size: 1.25rem;
      font-weight: 700;
      line-height: 130%;
      color: ${({ theme }) => theme.colors['base-subtitle']};
    }
  }
`

export const CheckoutButton = styled.button`
  padding: 0.75rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.yellow};
  border: none;
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-size: 0.875rem;
  font-weight: 700;
  line-height: 160%;
  transition: 0.2s;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const ContinueShoppingLink = styled(NavLink)`
  padding: 0.75rem 0.5rem;
  background-color: ${({ theme }) => theme.colors.background};
  border: 1px solid ${({ theme }) => theme.colors.yellow};
  border-radius: 6px;
  color: ${({ theme }) => theme.colors.yellow};
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
    color: ${({ theme }) => theme.colors['yellow-dark']};
    border-color: ${({ theme }) => theme.colors['yellow-dark']};

    svg {
      color: ${({ theme }) => theme.colors['yellow-dark']};
    }
  }
`

export const StyledShoppingCart = styled(ShoppingCart)`
  color: ${({ theme }) => theme.colors.yellow};
  display: block;
  transition: 0.2s;
`
