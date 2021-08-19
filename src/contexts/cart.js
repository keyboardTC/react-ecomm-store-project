import {createContext} from 'react'
 

const CartContext = createContext()
const useMoney = (cents) => {
	return `$ ${(cents / 100).toFixed(2)}`
}

export {CartContext, useMoney}