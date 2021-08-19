import React, {useContext} from 'react'
import Layout from 'components/Layout'
import {FaviContext, uMoney} from 'contexts/favi'
import ProductsContext from 'contexts/products'
import styled from 'styled-components'
import {Link} from 'react-router-dom'


const Favorite = ({data,page_tit}) => {
	
	const favi = useContext(FaviContext).data
	// const products = useContext(ProductsContext).data
	const products = useContext(ProductsContext)
	let subtotal = 0


	return (
		<Layout page_title = {page_tit}>
			<div className="defualt_page">
				<ul>
					{ 
						(favi.length)
							? (favi.map(item => {
	
									let {prod_img, prod_name, prod_prices, cost} = products.find(prod => prod.id === item.id)
									console.log(prod_prices[1]+" check out")
									subtotal += cost * item.count
									return <Model2><h2 className="cartProduct" key={item.id}>{prod_name} ({item.count} x {uMoney(prod_prices[1])}) = {uMoney(prod_prices[1] * item.count)}</h2></Model2> }))
							: (<div className="empty_pages">No items in your Favorite, try going to the <Link to="/">shop</Link></div> )
					}
				</ul>
				<footer>
					{Boolean(favi.length) && <div><em>(this does not do anything)</em> <button>Check out {uMoney(subtotal)}</button></div>}
				</footer>
			</div>
		</Layout>
	)
}

const Model2 = styled.div`
padding-top: 80px;
padding-bottom: 80px;
`

export default Favorite