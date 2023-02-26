import { useContext, useState } from 'react'
import { Minus, Plus } from 'phosphor-react'

import { Heading } from '../../../../components/Heading'
// import { QuantitySelector } from '../../../../components/QuantitySelector'

import {
  StyledCoffeeCard,
  CoffeeImage,
  CoffeeTags,
  CoffeeTag,
  CoffeeTitle,
  CoffeeDescription,
  CoffeePriceAndBuyOptionsContainer,
  CoffeePrice,
  BuyOptions,
  AddToCartButton,
  StyledShoppingCart,
  StyledQuantitySelector,
  SelectQuantityButton,
} from './styles'
import { CartContext } from '../../../../contexts/CartContext'

interface CoffeeCardProps {
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

export function CoffeeCard(props: CoffeeCardProps) {
  const [quantity, setQuantity] = useState(1)

  const { updateCart, formatPrice } = useContext(CartContext)

  function decrementQuantity() {
    if (quantity > 1) {
      setQuantity((state) => state - 1)
    }
  }

  function incrementQuantity() {
    setQuantity((state) => state + 1)
  }

  function handleAddToCart() {
    updateCart({
      coffeeImage: props.image,
      coffeeTitle: props.title,
      coffeePrice: props.price,
      selectedQuantity: quantity,
      totalPrice: props.price * quantity,
    })
  }

  // function formatCurrency(value) {

  // }
  // const [wholePart, decimalPart] = props.price.toString().split('.')
  // const priceFormatted = `${wholePart},${decimalPart?.padEnd(2, '0')}`

  return (
    <StyledCoffeeCard>
      <CoffeeImage src={props.image} />
      <CoffeeTags>
        {props.tags.map((tag) => (
          <CoffeeTag key={tag}>{tag}</CoffeeTag>
        ))}
      </CoffeeTags>
      {/* <Heading level={3} size="S" color="base-subtitle" fontWeight={700}>
        {props.title}
      </Heading> */}
      <CoffeeTitle>{props.title}</CoffeeTitle>
      <CoffeeDescription>{props.description}</CoffeeDescription>
      <CoffeePriceAndBuyOptionsContainer>
        <CoffeePrice>
          R$ <strong>{formatPrice(props.price)}</strong>
        </CoffeePrice>
        <BuyOptions>
          <StyledQuantitySelector>
            <SelectQuantityButton
              onClick={decrementQuantity}
              disabled={quantity === 1}
            >
              <Minus size={14} weight="bold" />
            </SelectQuantityButton>
            <span>{quantity}</span>
            <SelectQuantityButton onClick={incrementQuantity}>
              <Plus size={14} weight="bold" />
            </SelectQuantityButton>
          </StyledQuantitySelector>
          <AddToCartButton onClick={handleAddToCart}>
            <StyledShoppingCart size={22} weight="fill" />
          </AddToCartButton>
        </BuyOptions>
      </CoffeePriceAndBuyOptionsContainer>
    </StyledCoffeeCard>
  )
}
