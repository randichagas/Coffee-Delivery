import styled from 'styled-components'

export const HomeContainer = styled.div`
  padding-bottom: 10rem;
`

// export const Wrapper = styled.div`
//   max-width: 74rem;
//   margin: 0 auto;
//   padding-inline: 2rem;
// `

export const HeroContainer = styled.section`
  padding-block: 5.75rem;

  background-image: url('/hero-background.png');
  background-position: top center;
  /* background-size: 100% auto; */
  background-size: 500% 100%;
  background-repeat: no-repeat;
  /* border-bottom: 1px solid blue; */
`

export const Hero = styled.div`
  display: flex;
  gap: 3.5rem;

  /* @media (max-width: 1250px) {
    flex-direction: column;
  } */
`

export const HeroImage = styled.img`
  max-width: 29.75rem;
  max-height: 22.5rem;

  /* @media (max-width: 1250px) {
    display: none;
  } */
`

// export const HeroHeading = styled.h1`
//   font-family: 'Baloo 2', cursive;
//   font-weight: 800;
//   font-size: 3rem;
//   color: ${({ theme }) => theme.colors['base-title']};
//   line-height: 130%;
// `

export const HeroSubHeading = styled.p`
  margin-top: 1rem;
  font-size: 1.25rem;
  line-height: 130%;
  color: ${({ theme }) => theme.colors['base-subtitle']};
`

export const BenefitsList = styled.ul`
  display: grid;
  grid-template-columns: auto auto;
  row-gap: 1.25rem;
  column-gap: 2.5rem;
  margin-top: 4.125rem;
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

export const Coffees = styled.section`
  /* h2 {
    font-family: 'Baloo 2', cursive;
    font-weight: 800;
    font-size: 2rem;
    line-height: 130%;
  } */
`

export const CoffeeList = styled.div`
  margin-top: 3rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 2rem;
  row-gap: 2.5rem;

  /* @media (max-width: 1250px) {
    grid-template-columns: repeat(3, 1fr);
  } */

  /* @media (max-width: 950px) {
    grid-template-columns: repeat(2, 1fr);
  } */

  /* @media (max-width: 950px) {
    grid-template-columns: 1fr;
  } */
`

export const ResponsiveTitle = styled.h1`
  /* font-size: clamp(2rem, 1em + 1vw, 4rem); */
  font-size: min(3rem, 2vw);
  line-height: 160%;
`
