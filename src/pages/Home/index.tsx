import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'

import { CoffeeCard } from './components/CoffeeCard'
import { Heading } from '../../components/Heading'

import { Wrapper } from '../../styles/global'

import {
  HomeContainer,
  HeroContainer,
  Hero,
  HeroSubHeading,
  BenefitsList,
  ListItem,
  IconContainer,
  Coffees,
  CoffeeList,
  HeroImage,
  ResponsiveTitle,
} from './styles'

import HeroCoffee from '../../assets/hero-coffee.png'

import expresso from '../../assets/coffees/expresso.png'
import expressoAmericano from '../../assets/coffees/expresso-americano.png'
import expressoCremoso from '../../assets/coffees/expresso-cremoso.png'
import expressoGelado from '../../assets/coffees/expresso-gelado.png'
import cafeComLeite from '../../assets/coffees/cafe-com-leite.png'
import latte from '../../assets/coffees/latte.png'
import cappuccino from '../../assets/coffees/cappuccino.png'
import macchiato from '../../assets/coffees/macchiato.png'
import mochaccino from '../../assets/coffees/mochaccino.png'
import chocolateQuente from '../../assets/coffees/chocolate-quente.png'
import cubano from '../../assets/coffees/cubano.png'
import havaiano from '../../assets/coffees/havaiano.png'
import arabe from '../../assets/coffees/arabe.png'
import irlandes from '../../assets/coffees/irlandes.png'
// import { useContext } from 'react'
// import { CartContext } from '../../contexts/CartContext'

const coffees = [
  {
    image: expresso,
    tags: ['tradicional'],
    title: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    price: 9.9,
  },
  {
    image: expressoAmericano,
    tags: ['tradicional', 'gelado'],
    title: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    price: 9.9,
  },
  {
    image: expressoCremoso,
    tags: ['tradicional'],
    title: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremosa',
    price: 9.9,
  },
  {
    image: expressoGelado,
    tags: ['tradicional', 'gelado'],
    title: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    price: 9.9,
  },
  {
    image: cafeComLeite,
    tags: ['tradicional', 'com leite'],
    title: 'Café com Leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    price: 9.9,
  },
  {
    image: latte,
    tags: ['tradicional', 'com leite'],
    title: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    price: 9.9,
  },
  {
    image: cappuccino,
    tags: ['tradicional', 'com leite'],
    title: 'Cappuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    price: 9.9,
  },
  {
    image: macchiato,
    tags: ['tradicional', 'com leite'],
    title: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    price: 9.9,
  },
  {
    image: mochaccino,
    tags: ['tradicional', 'com leite'],
    title: 'Mochaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    price: 9.9,
  },
  {
    image: chocolateQuente,
    tags: ['especial', 'com leite'],
    title: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    price: 9.9,
  },
  {
    image: cubano,
    tags: ['especial', 'alcoólico', 'com leite'],
    title: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    price: 9.9,
  },
  {
    image: havaiano,
    tags: ['especial'],
    title: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    price: 9.9,
  },
  {
    image: arabe,
    tags: ['especial'],
    title: 'Árabe',
    description: 'Bebida preparada com grãos de café árabe e especiarias',
    price: 9.9,
  },
  {
    image: irlandes,
    tags: ['especial', 'alcoólico'],
    title: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    price: 9.9,
  },
]

export function Home() {
  return (
    <HomeContainer>
      <HeroContainer>
        <Wrapper>
          <Hero>
            <div>
              {/* <Heading level={1} size="XL">
                Encontre o café perfeito para qualquer hora do dia
              </Heading> */}
              <ResponsiveTitle>
                Encontre o café perfeito para qualquer hora do dia
              </ResponsiveTitle>
              <HeroSubHeading>
                Com o Coffee Delivery você recebe seu café onde estiver, a
                qualquer hora
              </HeroSubHeading>
              <BenefitsList>
                <ListItem>
                  <IconContainer variant="yellow-dark">
                    <ShoppingCart size={16} weight="fill" />
                  </IconContainer>
                  Compra simples e segura
                </ListItem>

                <ListItem>
                  <IconContainer variant="base-text">
                    <Package size={16} weight="fill" />
                  </IconContainer>
                  Embalagem mantém o café intacto
                </ListItem>

                <ListItem>
                  <IconContainer variant="yellow">
                    <Timer size={16} weight="fill" />
                  </IconContainer>
                  Entrega rápida e rastreada
                </ListItem>

                <ListItem>
                  <IconContainer variant="purple">
                    <Coffee size={16} weight="fill" />
                  </IconContainer>
                  O café chega fresquinho até você
                </ListItem>
              </BenefitsList>
            </div>
            <HeroImage src={HeroCoffee} alt="" />
          </Hero>
        </Wrapper>
      </HeroContainer>
      <Wrapper>
        <Coffees>
          <Heading level={2} color="base-subtitle" size="L">
            Nossos cafés
          </Heading>
          <CoffeeList>
            {coffees.map(({ image, tags, title, description, price }) => {
              return (
                <CoffeeCard
                  key={title}
                  image={image}
                  tags={tags}
                  title={title}
                  description={description}
                  price={price}
                />
              )
            })}
          </CoffeeList>
        </Coffees>
      </Wrapper>
    </HomeContainer>
  )
}
