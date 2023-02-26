import { Minus, Plus } from 'phosphor-react'
import { SelectQuantityButton, StyledQuantitySelector } from './styles'

export function QuantitySelector() {
  return (
    <StyledQuantitySelector>
      <SelectQuantityButton onClick={decrementQuantity}>
        <Minus size={14} weight="bold" />
      </SelectQuantityButton>
      <span>{quantity}</span>
      <SelectQuantityButton onClick={incrementQuantity}>
        <Plus size={14} weight="bold" />
      </SelectQuantityButton>
    </StyledQuantitySelector>
  )
}
