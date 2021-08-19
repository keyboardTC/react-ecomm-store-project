import React, {useContext} from 'react'
import {FaviContext, uMoney}  from 'contexts/favi'

const FavItem= ({data}) => {
	// console.log(prod_name)
    const {id, prod_img, prod_link, prod_name, prod_desc, prod_prices, prod_rating, prod_cat, prod_weight} = data
	const {data1, updater} = useContext(FaviContext)
	
	return <button onClick={() => updater(id, prod_name)} type="button" className="add-to-fav"><i className="fa far fa-heart" name="Whist List"></i></button>
}

export default FavItem