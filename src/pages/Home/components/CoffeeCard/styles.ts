import styled from 'styled-components'

import { ShoppingCart } from 'phosphor-react'

export const StyledCoffeeCard = styled.div`
  padding: 0 1.25rem 1.25rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  border-radius: 6px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 16rem;

  /* justify-self: center; */
`

export const CoffeeImage = styled.img`
  max-width: 7.5rem;
  max-height: 7.5rem;
  margin-top: -1.25rem;

  @media (max-width: 1250px) {
    width: 5.625rem;
    height: 5.625rem;
  }
`

export const CoffeeTags = styled.div`
  margin-top: 0.75rem;
  margin-bottom: 1rem;
  display: flex;
  gap: 0.25rem;
  justify-content: center;
  flex-wrap: wrap;
`

export const CoffeeTag = styled.span`
  background-color: ${({ theme }) => theme.colors['yellow-light']};
  padding: 0.25rem 0.5rem;
  text-transform: uppercase;
  border-radius: 100px;
  font-size: 0.625rem;
  /* font-size: clamp(0.25rem, 1em + 3vw, 0.625rem); */
  line-height: 130%;
  font-weight: 700;
  color: ${({ theme }) => theme.colors['yellow-dark']};

  @media (max-width: 1250px) {
    font-size: 0.5rem;
  }
`

export const CoffeeTitle = styled.h3`
  font-family: 'Baloo 2', cursive;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${({ theme }) => theme.colors['base-subtitle']};
  line-height: 130%;

  @media (max-width: 1250px) {
    font-size: 0.9375rem;
  }
`

export const CoffeeDescription = styled.p`
  margin-top: 0.5rem;
  font-size: 0.875rem;
  /* font-size: clamp(0.4rem, 1em + 5vw, 0.875rem); */
  line-height: 130%;
  color: ${({ theme }) => theme.colors['base-label']};
  text-align: center;

  @media (max-width: 1250px) {
    font-size: 0.65625rem;
  }
`

export const CoffeePriceAndBuyOptionsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  gap: 1.5rem;
`

export const CoffeePrice = styled.div`
  font-size: 0.875rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors['base-text']};

  @media (max-width: 1250px) {
    font-size: 0.65625rem;
  }

  strong {
    font-size: 1.5rem;
    /* font-size: clamp(0.5rem, 0.5em + 1.5vw, 1.5rem); */
    font-weight: 800;
    font-family: 'Baloo 2', cursive;

    @media (max-width: 1250px) {
      font-size: 1.125rem;
    }
  }
`

export const BuyOptions = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`

export const StyledQuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  width: 4.5rem;

  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  span {
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 130%;
  }

  @media (max-width: 1250px) {
    width: 3.375rem;
  }
`

export const SelectQuantityButton = styled.button`
  border: none;
  background-color: transparent;
  /* all: unset; */
  display: flex;

  color: ${({ theme }) => theme.colors.purple};
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    color: ${({ theme }) => theme.colors['purple-dark']};
  }

  &:disabled {
    color: ${({ theme }) => theme.colors['base-label']};
    /* cursor: not-allowed; */
  }
`

export const AddToCartButton = styled.button`
  background-color: ${({ theme }) => theme.colors['purple-dark']};
  padding: 0.5rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: 0.2s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.purple};
  }
`

export const StyledShoppingCart = styled(ShoppingCart)`
  color: ${({ theme }) => theme.colors.white};
  display: block;
`
