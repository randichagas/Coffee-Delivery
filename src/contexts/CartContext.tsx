import { createContext, ReactNode, useEffect, useState } from 'react'

export interface SelectedCoffee {
  coffeeImage: string
  coffeeTitle: string
  selectedQuantity: number
  coffeePrice: number
  totalPrice: number
}

export interface CheckoutData {
  deliveryAddress?: {
    postalCode: string
    addressLine1: string
    number: number
    addressLine2: string
    neighborhood: string
    city: string
    state: string
  }
  paymentMethod?: string
  coffees?: SelectedCoffee[]
}

interface CartContextType {
  cart: SelectedCoffee[]
  cartQuantity: number
  totalOrderPrice: number
  checkoutData: CheckoutData
  // addToCart: (data: SelectedCoffee) => void
  updateItem: (data: SelectedCoffee, action?: string) => void
  removeItem: (data: SelectedCoffee[]) => void
  updateCart: (data: SelectedCoffee) => void
  emptyCart: () => void
  formatPrice: (price: number) => string
  confirmOrder: (data: {}) => void
}

interface CartContextProviderProps {
  children: ReactNode
}

export const CartContext = createContext({} as CartContextType)

const cartInLocalStorage = window.localStorage.getItem('@coffee-delivery:cart')

const initialCartState: SelectedCoffee[] = cartInLocalStorage
  ? JSON.parse(cartInLocalStorage)
  : []

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cart, setCart] = useState<SelectedCoffee[]>(initialCartState)
  const [checkoutData, setCheckoutData] = useState<CheckoutData>({})

  useEffect(() => {
    window.localStorage.setItem('@coffee-delivery:cart', JSON.stringify(cart))
  }, [cart])

  function addToCart(props: SelectedCoffee) {
    setCart((state) => [
      ...state,
      {
        coffeeImage: props.coffeeImage,
        coffeeTitle: props.coffeeTitle,
        selectedQuantity: props.selectedQuantity,
        coffeePrice: props.coffeePrice,
        totalPrice: parseFloat(props.totalPrice.toFixed(2)),
      },
    ])
  }

  function updateItem(props: SelectedCoffee, action?: string) {
    const updatedCart = cart.map((item) => {
      if (item.coffeeTitle !== props.coffeeTitle) {
        return item
      }

      let updatedQuantity = 0
      let updatedPrice = 0

      switch (action) {
        case 'increment':
          updatedQuantity = item.selectedQuantity + 1
          updatedPrice = item.totalPrice + item.coffeePrice
          break
        case 'decrement':
          updatedQuantity = item.selectedQuantity - 1
          updatedPrice = item.totalPrice - item.coffeePrice
          break
        default:
          updatedQuantity = item.selectedQuantity + props.selectedQuantity
          updatedPrice =
            item.totalPrice + props.selectedQuantity * item.coffeePrice
          break
      }

      return {
        ...props,
        selectedQuantity: updatedQuantity,
        totalPrice: updatedPrice,
      }
    })

    setCart(updatedCart)
  }

  function removeItem(itemsWithoutDeletedOne: SelectedCoffee[]) {
    setCart(itemsWithoutDeletedOne)
  }

  function updateCart(props: SelectedCoffee) {
    const product = cart.find((item) => item.coffeeTitle === props.coffeeTitle)

    if (!product) {
      addToCart(props)
      return
    }

    updateItem(props)
  }

  function emptyCart() {
    setCart([])
  }

  function formatPrice(price: number) {
    return price.toFixed(2).replace('.', ',')
  }

  function confirmOrder(orderData: any) {
    setCheckoutData(orderData)
  }

  const cartQuantity = cart.reduce(
    (acc, item) => acc + item.selectedQuantity,
    0,
  )

  const totalOrderPrice = cart.reduce((acc, item) => acc + item.totalPrice, 0)

  return (
    <CartContext.Provider
      value={{
        cart,
        cartQuantity,
        // addToCart,
        totalOrderPrice,
        removeItem,
        updateItem,
        updateCart,
        emptyCart,
        formatPrice,
        confirmOrder,
        checkoutData,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
