import React, {useContext} from 'react'
import Layout from 'components/Layout'
import {CartContext, useMoney} from 'contexts/cart'
import ProductsContext from 'contexts/products'
import Image from 'components/Image'
import Removebtn from 'components/Removebtn'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Checkout = ({data,page_tit}) => {
	
	const cart = useContext(CartContext).data
	// const products = useContext(ProductsContext).data
	const products = useContext(ProductsContext)
	let subtotal = 0


	return (
		<Layout page_title = {page_tit}>
			<ul>
				{ 
					(cart.length)
						? (cart.map(item => {
 
								let {prod_img, prod_name, prod_prices, cost} = products.find(prod => prod.id === item.id)
                                console.log(prod_prices[1]+" check out")
								subtotal += prod_prices[1] * item.count
								return <Model2><Image src={prod_img[0]} alt={prod_name} className="thumbcart" ></Image> <h2 className="cartProduct" key={item.id}><b>{prod_name}</b> ({item.count} x {useMoney(prod_prices[1])}) <b>= {useMoney(prod_prices[1] * item.count)}</b></h2><Removebtn data={item}> </Removebtn></Model2> }))
						: (<div>No items in your cart, try going to the <Link to="/">shop</Link></div> )
				}
			</ul>
			<footer>
				{Boolean(cart.length) && <div><button className="add-to-cart-btn">Check out {useMoney(subtotal)}</button></div>}
			</footer>
		</Layout>
	)
}

const Model2 = styled.div`
padding-top: 0px;
display:flex;
margin-bottom: 2em; 
`

export default Checkout