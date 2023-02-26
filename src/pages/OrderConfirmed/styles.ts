import styled from 'styled-components'

export const OrderConfirmedContainer = styled.main`
  margin-top: 5rem;
`

export const Wrapper = styled.div`
  max-width: 74rem;
  margin: 0 auto;
  padding-inline: 2rem;
`

// export const Heading = styled.h1`
//   font-family: 'Baloo 2', cursive;
//   font-weight: 800;
//   font-size: 2rem;
//   line-height: 130%;
//   color: ${({ theme }) => theme.colors['yellow-dark']};
// `

export const SubHeading = styled.p`
  font-size: 1.25rem;
  line-height: 130%;
`

export const DeliveryDetailsContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

export const DeliveryDetails = styled.ul`
  margin-top: 2.5rem;
  margin-left: 2.875rem;
  padding: 2.5rem;
  border: 1.5px solid ${({ theme }) => theme.colors.purple};
  border-radius: 6px 36px;
  background-color: ${({ theme }) => theme.colors.background};
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  display: flex;
  flex-direction: column;
  gap: 2rem;
`

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  color: ${({ theme }) => theme.colors['base-text']};

  svg {
    color: ${({ theme }) => theme.colors.white};
  }
`

interface IconContainerProps {
  variant: 'yellow-dark' | 'base-text' | 'yellow' | 'purple'
}

export const IconContainer = styled.div<IconContainerProps>`
  background-color: ${({ theme, variant }) => theme.colors[variant]};
  border-radius: 999px;
  padding: 0.5rem;
  display: flex;
`
export const ItemDescription = styled.div``

export const DeliveryManImage = styled.div`
  margin-bottom: -0.875rem;
  align-self: flex-end;
  line-height: 0;
`
