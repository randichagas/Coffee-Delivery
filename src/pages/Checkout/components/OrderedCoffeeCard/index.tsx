import { useContext, useState } from 'react'
import { CartContext, SelectedCoffee } from '../../../../contexts/CartContext'
import { Minus, Plus, Trash } from 'phosphor-react'

// import { QuantitySelector } from '../../../../components/QuantitySelector'

import {
  StyledOrderedCoffeeCard,
  CoffeeImage,
  OrderDetails,
  CoffeeTitle,
  BuyOptions,
  RemoveButton,
  CoffeePrice,
  StyledQuantitySelector,
  SelectQuantityButton,
} from './styles'

export function OrderedCoffeeCard(props: SelectedCoffee) {
  const [quantity, setQuantity] = useState(props.selectedQuantity)

  const { cart, removeItem, updateItem, formatPrice } = useContext(CartContext)

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
      updateItem(props, 'decrement')
    }
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
    updateItem(props, 'increment')
  }

  function handleRemoveItem() {
    const filteredCoffeeCards = cart.filter(
      (item) => item.coffeeTitle !== props.coffeeTitle,
    )

    removeItem(filteredCoffeeCards)
  }

  // const [wholePart, decimalPart] = props.totalPrice.toString().split('.')
  // const totalPriceFormatted = `${wholePart},${decimalPart.padEnd(2, '0')}`

  // console.log(wholePart, decimalPart, totalPriceFormatted)

  return (
    <StyledOrderedCoffeeCard>
      <CoffeeImage src={props.coffeeImage} />
      <OrderDetails>
        <CoffeeTitle>{props.coffeeTitle}</CoffeeTitle>
        <BuyOptions>
          <StyledQuantitySelector>
            <SelectQuantityButton
              type="button"
              onClick={decrementQuantity}
              disabled={quantity === 1}
            >
              <Minus size={14} weight="bold" />
            </SelectQuantityButton>
            <span>{quantity}</span>
            <SelectQuantityButton type="button" onClick={incrementQuantity}>
              <Plus size={14} weight="bold" />
            </SelectQuantityButton>
          </StyledQuantitySelector>
          <RemoveButton onClick={handleRemoveItem}>
            <Trash size={16} />
            Remover
          </RemoveButton>
        </BuyOptions>
      </OrderDetails>
      <CoffeePrice>R$ {formatPrice(props.totalPrice)}</CoffeePrice>
    </StyledOrderedCoffeeCard>
  )
}
