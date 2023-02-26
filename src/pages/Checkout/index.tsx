import { Bank, CreditCard, Money, WarningCircle } from 'phosphor-react'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'

import { Heading } from '../../components/Heading'
import { CartContext } from '../../contexts/CartContext'
import { Cart } from './components/Cart'
import { EmptyCart } from './components/EmptyCart'

import {
  CheckoutContainer,
  Wrapper,
  CheckoutForm,
  BillingSection,
  DeliveryAddressContainer,
  ErrorMessage,
  SectionHeading,
  StyledMapPinLine,
  DeliveryAddress,
  Input,
  InputContainer,
  InputAddressLine2,
  PaymentMethodContainer,
  StyledCurrencyDollar,
  PaymentMethod,
  CartSection,
  ToggleGroup,
  ToggleGroupItem,
  CartContainer,
} from './styles'

const confirmOrderValidationSchema = zod.object({
  postalCode: zod
    .string()
    .regex(/\d{5}-?\d{3}/, 'Digite um formato válido de CEP.'),
  addressLine1: zod
    .string()
    .min(1, 'O endereço é obrigatório pra poder receber a encomenda!')
    .trim(),
  number: zod
    .number({
      invalid_type_error: 'Informe um número válido!',
    })
    .positive('Informe um número maior que zero'),
  addressLine2: zod.string().trim().optional(),
  neighborhood: zod.string().min(1, 'Informe o bairro').trim(),
  city: zod.string().min(1, 'Informe a cidade').trim(),
  state: zod.string().length(2, 'Informe o estado'),
})

type ConfirmOrderData = zod.infer<typeof confirmOrderValidationSchema>

export function Checkout() {
  const [paymentMethod, setPaymentMethod] = useState('')
  const [noPaymentMethodMessage, setNoPaymentMethodMessage] = useState('')

  const { cart, confirmOrder, emptyCart } = useContext(CartContext)

  const navigate = useNavigate()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ConfirmOrderData>({
    resolver: zodResolver(confirmOrderValidationSchema),
  })

  // let noPaymentMethodMessage = ''

  function handleConfirmOrder(data: ConfirmOrderData) {
    const paymentMethods = {
      credit: 'Cartão de Crédito',
      debit: 'Cartão de Débito',
      cash: 'Dinheiro',
    }

    if (!paymentMethod) {
      console.log('Escolha um método de pagamento!')
      setNoPaymentMethodMessage('Escolha um método de pagamento!')
      return
    }

    confirmOrder({
      deliveryAddress: {
        ...data,
      },
      paymentMethod:
        paymentMethods[paymentMethod as keyof typeof paymentMethods],
      coffees: cart,
    })

    reset()
    emptyCart()
    navigate('/order-confirmed')
  }

  return (
    <CheckoutContainer>
      <Wrapper>
        <CheckoutForm onSubmit={handleSubmit(handleConfirmOrder)}>
          <BillingSection>
            <Heading level={2} size="XS" color="base-subtitle" fontWeight={700}>
              Complete seu pedido
            </Heading>
            <DeliveryAddressContainer>
              <SectionHeading>
                <StyledMapPinLine size={22} />
                <div>
                  <h3>Endereço de Entrega</h3>
                  <p>Informe o endereço onde deseja receber seu pedido</p>
                </div>
              </SectionHeading>

              <DeliveryAddress>
                <InputContainer id="postalCode">
                  <Input
                    type="text"
                    placeholder="CEP"
                    {...register('postalCode')}
                    className={errors.postalCode && 'error'}
                  />
                  {errors.postalCode && (
                    <ErrorMessage>
                      <WarningCircle size={18} weight="fill" />
                      <p>{errors.postalCode?.message}</p>
                    </ErrorMessage>
                  )}
                </InputContainer>

                <InputContainer id="addressLine1">
                  <Input
                    type="text"
                    placeholder="Rua"
                    {...register('addressLine1')}
                    className={errors.addressLine1 && 'error'}
                  />
                  {errors.addressLine1 && (
                    <ErrorMessage>
                      <WarningCircle size={18} weight="fill" />
                      <p>{errors.addressLine1?.message}</p>
                    </ErrorMessage>
                  )}
                </InputContainer>

                <InputContainer id="number">
                  <Input
                    type="number"
                    placeholder="Número"
                    {...register('number', { valueAsNumber: true })}
                    min={1}
                    className={errors.number && 'error'}
                  />
                  {errors.number && (
                    <ErrorMessage>
                      <WarningCircle size={18} weight="fill" />
                      <p>{errors.number?.message}</p>
                    </ErrorMessage>
                  )}
                </InputContainer>

                <InputContainer id="addressLine2">
                  <InputAddressLine2>
                    <input
                      type="text"
                      placeholder="Complemento"
                      {...register('addressLine2')}
                    />
                    <span>Opcional</span>
                  </InputAddressLine2>
                </InputContainer>

                <InputContainer id="neighborhood">
                  <Input
                    type="text"
                    placeholder="Bairro"
                    className={errors.neighborhood && 'error'}
                    {...register('neighborhood')}
                  />
                  {errors.neighborhood && (
                    <ErrorMessage>
                      <WarningCircle size={18} weight="fill" />
                      <p>{errors.neighborhood?.message}</p>
                    </ErrorMessage>
                  )}
                </InputContainer>

                <InputContainer id="city">
                  <Input
                    type="text"
                    placeholder="Cidade"
                    className={errors.city && 'error'}
                    {...register('city')}
                  />
                  {errors.city && (
                    <ErrorMessage>
                      <WarningCircle size={18} weight="fill" />
                      <p>{errors.city?.message}</p>
                    </ErrorMessage>
                  )}
                </InputContainer>

                <InputContainer id="state">
                  <Input
                    type="text"
                    placeholder="UF"
                    maxLength={2}
                    className={errors.state && 'error'}
                    {...register('state')}
                  />
                  {errors.state && (
                    <ErrorMessage>
                      <WarningCircle size={18} weight="fill" />
                      <p>{errors.state?.message}</p>
                    </ErrorMessage>
                  )}
                </InputContainer>
              </DeliveryAddress>
            </DeliveryAddressContainer>
            <PaymentMethodContainer>
              <SectionHeading>
                <StyledCurrencyDollar size={22} />
                <div>
                  <h3>Pagamento</h3>
                  <p>
                    O pagamento é feito na entrega. Escolha a forma que deseja
                    pagar
                  </p>
                </div>
              </SectionHeading>
              <PaymentMethod>
                <ToggleGroup
                  type="single"
                  value={paymentMethod}
                  onValueChange={setPaymentMethod}
                >
                  <ToggleGroupItem value="credit">
                    <CreditCard size={16} />
                    Cartão de crédito
                  </ToggleGroupItem>
                  <ToggleGroupItem value="debit">
                    <Bank size={16} />
                    Cartão de débito
                  </ToggleGroupItem>
                  <ToggleGroupItem value="cash">
                    <Money size={16} />
                    Dinheiro
                  </ToggleGroupItem>
                </ToggleGroup>
                {noPaymentMethodMessage && !paymentMethod && (
                  <ErrorMessage>
                    <WarningCircle size={18} weight="fill" />
                    <p>{noPaymentMethodMessage}</p>
                  </ErrorMessage>
                )}
              </PaymentMethod>
            </PaymentMethodContainer>
          </BillingSection>
          <CartSection>
            <Heading level={2} size="XS" color="base-subtitle" fontWeight={700}>
              Cafés selecionados
            </Heading>
            <CartContainer>
              {cart.length !== 0 ? <Cart /> : <EmptyCart />}
            </CartContainer>
          </CartSection>
        </CheckoutForm>
      </Wrapper>
    </CheckoutContainer>
  )
}
