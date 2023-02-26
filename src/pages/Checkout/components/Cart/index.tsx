import { useContext } from 'react'
import { CartContext } from '../../../../contexts/CartContext'
import { OrderedCoffeeCard } from '../OrderedCoffeeCard'
import {
  StyledCart,
  OrderSummary,
  CheckoutButton,
  ContinueShoppingLink,
  StyledShoppingCart,
} from './styles'

export function Cart() {
  const { cart, formatPrice, totalOrderPrice } = useContext(CartContext)

  return (
    <StyledCart>
      {cart.map((item) => {
        return (
          <OrderedCoffeeCard
            key={item.coffeeTitle}
            coffeeImage={item.coffeeImage}
            coffeeTitle={item.coffeeTitle}
            coffeePrice={item.coffeePrice}
            selectedQuantity={item.selectedQuantity}
            totalPrice={item.totalPrice}
          />
        )
      })}

      <OrderSummary>
        <div>
          <span>Total de itens</span>
          <span>R$ {formatPrice(totalOrderPrice)}</span>
        </div>
        <div>
          <span>Entrega</span>
          <span>R$ 3,50</span>
        </div>
        <div>
          <strong>Total</strong>
          <strong>R$ {formatPrice(totalOrderPrice + 3.5)}</strong>
        </div>
      </OrderSummary>
      <CheckoutButton type="submit">Confirmar pedido</CheckoutButton>
      <ContinueShoppingLink to="/">
        <StyledShoppingCart size={22} weight="fill" />
        Continuar comprando
      </ContinueShoppingLink>
    </StyledCart>
  )
}
