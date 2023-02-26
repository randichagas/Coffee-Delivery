import {
  StyledEmptyCart,
  ContinueShoppingLink,
  StyledShoppingCart,
} from './styles'

export function EmptyCart() {
  return (
    <StyledEmptyCart>
      <h1>Não há nenhum café selecionado</h1>
      <p>Deseja adicionar algum café no carrinho?</p>
      <ContinueShoppingLink to="/">
        <StyledShoppingCart size={22} weight="fill" />
        Continuar comprando
      </ContinueShoppingLink>
    </StyledEmptyCart>
  )
}
