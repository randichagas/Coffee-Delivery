import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'

import {
  OrderConfirmedContainer,
  Wrapper,
  SubHeading,
  DeliveryDetailsContainer,
  DeliveryDetails,
  ListItem,
  IconContainer,
  ItemDescription,
  DeliveryManImage,
} from './styles'

import deliveryMan from '../../assets/delivery-man.svg'
import { Heading } from '../../components/Heading'
import { CartContext } from '../../contexts/CartContext'

export function OrderConfirmed() {
  const { checkoutData } = useContext(CartContext)
  const { deliveryAddress, paymentMethod } = checkoutData

  console.log(checkoutData)

  return (
    <OrderConfirmedContainer>
      <Wrapper>
        <Heading level={1} color="yellow-dark" size="L">
          Uhu! Pedido confirmado
        </Heading>
        <SubHeading>
          Agora é só aguardar que logo o café chegará até você
        </SubHeading>
        <DeliveryDetailsContainer>
          <DeliveryDetails>
            <ListItem>
              <IconContainer variant="purple">
                <MapPin size={16} weight="fill" />
              </IconContainer>
              <ItemDescription>
                <p>
                  Entrega em{' '}
                  <strong>{`${deliveryAddress?.addressLine1}, ${deliveryAddress?.number}`}</strong>
                </p>
                <p>{`${deliveryAddress?.neighborhood} - ${deliveryAddress?.city}, ${deliveryAddress?.state} `}</p>
              </ItemDescription>
            </ListItem>

            <ListItem>
              <IconContainer variant="yellow">
                <Timer size={16} weight="fill" />
              </IconContainer>
              <ItemDescription>
                <p>Previsão de entrega</p>
                <strong>20 min - 30 min</strong>
              </ItemDescription>
            </ListItem>

            <ListItem>
              <IconContainer variant="yellow-dark">
                <CurrencyDollar size={16} weight="fill" />
              </IconContainer>
              <ItemDescription>
                <p>Pagamento na entrega</p>
                <strong>{paymentMethod}</strong>
              </ItemDescription>
            </ListItem>
          </DeliveryDetails>
          <DeliveryManImage>
            <img src={deliveryMan} alt="" />
          </DeliveryManImage>
        </DeliveryDetailsContainer>
      </Wrapper>
    </OrderConfirmedContainer>
  )
}
