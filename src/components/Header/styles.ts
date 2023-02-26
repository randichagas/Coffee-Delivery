import styled from 'styled-components'

import { MapPin, ShoppingCart } from 'phosphor-react'
import { NavLink } from 'react-router-dom'

export const HeaderContainer = styled.div`
  padding-block: 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Wrapper = styled.div`
  max-width: 78rem;
  margin: 0 auto;
  padding-inline: 4rem;

  /* @media (max-width: 1250px) {
    max-width: 60rem;
  } */
`

export const Flex = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`

export const Location = styled.div`
  background-color: ${({ theme }) => theme.colors['purple-light']};
  padding: 0.5rem;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  border-radius: 6px;
  color: ${({ theme }) => theme.colors['purple-dark']};
  font-size: 0.875rem;
`

export const StyledMapPin = styled(MapPin)`
  color: ${({ theme }) => theme.colors.purple};
`

export const CartLink = styled(NavLink)`
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  padding: 0.5rem;
  border-radius: 6px;
  position: relative;
  cursor: pointer;
`

export const StyledShoppingCart = styled(ShoppingCart)`
  color: ${({ theme }) => theme.colors['yellow-dark']};
  display: block;
`

export const CartItemsQuantity = styled.span`
  width: 1.25rem;
  height: 1.25rem;
  background-color: ${({ theme }) => theme.colors['yellow-dark']};
  color: ${({ theme }) => theme.colors.white};
  font-weight: 700;
  font-size: 0.75rem;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -8px;
  right: -8px;
`
