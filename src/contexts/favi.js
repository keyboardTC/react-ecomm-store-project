import {createContext} from 'react'
 

const FaviContext = createContext()
const uMoney = (cents) => {
	return `$ ${(cents / 100).toFixed(2)}`
} 

export {FaviContext, uMoney}