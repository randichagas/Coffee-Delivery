import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import coffeeDeliveryLogo from '../../assets/coffee-delivery-logo.svg'
import { CartContext } from '../../contexts/CartContext'

import {
  Wrapper,
  HeaderContainer,
  Flex,
  StyledMapPin,
  CartLink,
  StyledShoppingCart,
  Location,
  CartItemsQuantity,
} from './styles'

export function Header() {
  const { cartQuantity } = useContext(CartContext)

  return (
    <Wrapper>
      <HeaderContainer>
        <NavLink to="/">
          <img src={coffeeDeliveryLogo} alt="" />
        </NavLink>
        <Flex>
          <Location>
            <StyledMapPin size={22} weight="fill" />
            Porto Alegre, RS
          </Location>
          <CartLink to="/checkout">
            <StyledShoppingCart size={22} weight="fill" />
            {cartQuantity !== 0 && (
              <CartItemsQuantity>{cartQuantity}</CartItemsQuantity>
            )}
          </CartLink>
        </Flex>
      </HeaderContainer>
    </Wrapper>
  )
}
