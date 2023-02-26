import styled from 'styled-components'

export const StyledOrderedCoffeeCard = styled.div`
  display: grid;
  grid-template-columns: max-content auto auto;
  column-gap: 1.25rem;

  padding-bottom: 1.5rem;
  /* margin-bottom: 1.5rem; */
  border-bottom: 1px solid ${({ theme }) => theme.colors['base-button']};
`

export const CoffeeImage = styled.img`
  width: 4rem;
  height: 4rem;
`

export const OrderDetails = styled.div``

export const CoffeeTitle = styled.h3`
  font-size: 1rem;
  line-height: 130%;
  font-weight: 400;
  color: ${({ theme }) => theme.colors['base-subtitle']};
  margin-bottom: 0.5rem;
`

export const BuyOptions = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const StyledQuantitySelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 0.25rem;

  min-width: 4.5rem;

  background-color: ${({ theme }) => theme.colors['base-button']};
  padding: 0.5rem;
  border-radius: 6px;

  span {
    color: ${({ theme }) => theme.colors['base-title']};
    line-height: 130%;
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

export const RemoveButton = styled.button`
  padding: 0.5rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;
  border: none;

  display: flex;
  align-items: center;
  gap: 0.25rem;

  font-size: 0.75rem;
  line-height: 160%;
  text-transform: uppercase;
  color: ${({ theme }) => theme.colors['base-text']};

  cursor: pointer;
  transition: 0.2s;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }
`

export const CoffeePrice = styled.strong`
  font-weight: 700;
  font-size: 1rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors['base-text']};
  justify-self: flex-end;
`
