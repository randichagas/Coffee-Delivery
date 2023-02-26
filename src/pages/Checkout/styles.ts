import styled from 'styled-components'
import * as ToggleGroupPrimitive from '@radix-ui/react-toggle-group'

import { CurrencyDollar, MapPinLine } from 'phosphor-react'

export const CheckoutContainer = styled.main``

export const Wrapper = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding-inline: 2rem;
`

export const CheckoutForm = styled.form`
  margin-top: 2.5rem;
  display: flex;
  gap: 2rem;
`

// export const Heading = styled.h2`
//   font-family: 'Baloo 2', cursive;
//   font-size: 1.125rem;
//   font-weight: 700;
//   line-height: 130%;
//   color: ${({ theme }) => theme.colors['base-subtitle']};
// `

export const BillingSection = styled.div``

export const SectionHeading = styled.div`
  display: flex;
  gap: 0.5rem;

  h3 {
    font-size: 1rem;
    line-height: 130%;
    font-weight: 400;
    color: ${({ theme }) => theme.colors['base-subtitle']};
  }

  p {
    font-size: 0.875rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-text']};
  }
`

export const DeliveryAddressContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  margin-top: 1rem;
  padding: 2.5rem;
  border-radius: 6px;
`

export const StyledMapPinLine = styled(MapPinLine)`
  color: ${({ theme }) => theme.colors['yellow-dark']};
`

export const DeliveryAddress = styled.div`
  margin-top: 2rem;
  display: grid;
  /* grid-template-columns: 12.5rem 17.25rem 3.75rem; */
  grid-template-columns: 10.5rem 15.25rem 7.75rem;
  column-gap: 0.75rem;
  row-gap: 1rem;

  #postalCode {
    grid-row-start: 1;
    grid-column: 1 / 2;
  }

  #addressLine1 {
    grid-row-start: 2;
    grid-column: 1 / span 3;
  }

  #number {
    grid-row-start: 3;
    grid-column: 1 / 2;
  }

  #addressLine2 {
    grid-row-start: 3;
    grid-column: 2 / 4;
  }

  #neighborhood {
    grid-row-start: 4;
    grid-column: 1 / 2;
  }

  #city {
    grid-row-start: 4;
    grid-column: 2 / 3;
  }

  #state {
    grid-row-start: 4;
    grid-column: 3 / 4;
  }
`

export const InputContainer = styled.div`
  /* .error {
    box-shadow: 0 0 0 1px red;
  } */

  .error:focus {
    box-shadow: 0 0 0 1px red;
  }
`

export const ErrorMessage = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;

  p {
    color: red;
    font-size: 0.75rem;
    line-height: 130%;
  }

  svg {
    color: red;
  }
`

export const Input = styled.input`
  width: 100%;
  background-color: ${({ theme }) => theme.colors['base-input']};
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.875rem;
  line-height: 130%;
  outline: none;
  transition: 0.2s;

  &::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  &:focus {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['yellow-dark']};
  }
`

export const InputAddressLine2 = styled.div`
  background-color: ${({ theme }) => theme.colors['base-input']};
  padding: 0.75rem;
  border: 1px solid ${({ theme }) => theme.colors['base-button']};
  border-radius: 4px;
  color: ${({ theme }) => theme.colors['base-text']};
  font-size: 0.875rem;
  line-height: 130%;
  outline: none;

  display: flex;
  align-items: center;

  &:focus-within {
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors['yellow-dark']};
  }

  input {
    all: unset;
    flex: 1;
  }

  input::placeholder {
    color: ${({ theme }) => theme.colors['base-label']};
  }

  span {
    font-style: italic;
    font-size: 0.75rem;
    line-height: 130%;
    color: ${({ theme }) => theme.colors['base-label']};
  }
`

export const PaymentMethodContainer = styled.div`
  background-color: ${({ theme }) => theme.colors['base-card']};
  margin-top: 0.75rem;
  padding: 2.5rem;
  border-radius: 6px;
`

export const StyledCurrencyDollar = styled(CurrencyDollar)`
  color: ${({ theme }) => theme.colors.purple};
`

export const PaymentMethod = styled.div``

export const ToggleGroup = styled(ToggleGroupPrimitive.Root)`
  all: unset;
  display: flex;
  gap: 0.75rem;

  margin-top: 2rem;
`

export const ToggleGroupItem = styled(ToggleGroupPrimitive.Item)`
  /* all: unset; */
  border: none;

  flex: 1;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors['base-button']};
  border-radius: 6px;

  font-size: 0.75rem;
  /* line-height: 160%; */
  color: ${({ theme }) => theme.colors['base-text']};
  text-transform: uppercase;

  display: flex;
  align-items: center;
  gap: 0.75rem;

  cursor: pointer;

  transition: all 0.2s;

  svg {
    color: ${({ theme }) => theme.colors.purple};
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors['base-hover']};
  }

  &[data-state='on'] {
    background-color: ${({ theme }) => theme.colors['purple-light']};
    /* border: 1.4px solid ${({ theme }) => theme.colors.purple}; */
    box-shadow: 0 0 0 1px ${({ theme }) => theme.colors.purple};
  }
`

export const CartSection = styled.div`
  flex: 1;
`

export const CartContainer = styled.div`
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.colors['base-card']};
  padding: 2.5rem;
  border-radius: 6px 44px;

  /* display: flex;
  flex-direction: column;
  gap: 1.5rem; */
`

// export const OrderSummary = styled.div`
//   display: flex;
//   flex-direction: column;
//   gap: 0.75rem;

//   div {
//     display: flex;
//     justify-content: space-between;

//     span {
//       font-size: 0.875rem;
//       line-height: 130%;
//       color: ${({ theme }) => theme.colors['base-text']};
//     }

//     strong {
//       font-size: 1.25rem;
//       font-weight: 700;
//       line-height: 130%;
//       color: ${({ theme }) => theme.colors['base-subtitle']};
//     }
//   }
// `

// // const ItemsTotal = styled.div``
// // const ShippingCost = styled.div``
// // const OrderTotal = styled.div``

// export const CheckoutButton = styled.button`
//   padding: 0.75rem 0.5rem;
//   background-color: ${({ theme }) => theme.colors.yellow};
//   border: none;
//   border-radius: 6px;
//   color: ${({ theme }) => theme.colors.white};
//   text-transform: uppercase;
//   font-size: 0.875rem;
//   font-weight: 700;
//   line-height: 160%;
//   transition: 0.2s;
//   cursor: pointer;

//   &:hover {
//     background-color: ${({ theme }) => theme.colors['yellow-dark']};
//   }
// `
