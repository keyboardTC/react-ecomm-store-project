import React, { useState, useEffect } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Products from 'pages/Products'
import Single_product  from 'pages/Product-page'
import Checkout  from 'pages/Checkout'
import Favorite  from 'pages/Favorite'
import UserContext from 'contexts/user'
import {CartContext, useMoney} from 'contexts/cart'
import {FaviContext, uMoney}  from 'contexts/favi'
import ProductsContext from 'contexts/products'
import firebase from 'utils/firebase'
import Loading from 'components/Loading'
import 'css/reset.css';
import 'css/style.css';

const App = () => {

  const [productsAr, setProductsAr] = useState([])
  const [loading, setLoading] = useState(true)
  const [cart, setCart] = useState([])
  const [favi, setFavi] = useState([])

// Connect to the DB
  const db = firebase.firestore()

  useEffect(() => {
    const loadData = async () => {
      console.log(`Loading...`)
      setLoading(true)

      // READ: product data
      await db.collection(`products`).get().then((snapshot) => {
        setProductsAr(
          snapshot.docs.reduce((products, doc) => [...products, doc.data()], [])
        )
      })

      setLoading(false)
    }

    loadData()
  }, [])  

  

  // Generate one StudentRow per object above.

  // loading screen
  if (loading)
  return <Loading>Loading...</Loading>

  // Add to cart
    const addToCart = (id) => {
      const index = cart.findIndex((val) => val.id === id)
      
      if (index === -1) // product not found in the cart
        cart.push({id: id, count: 1})
      else
        cart[index].count++ // increase the "count" by +1
      
      setCart([...cart])
    }
  // Add to Favorite
    const addToFavi = (id) => {
      const index = favi.findIndex((val) => val.id === id)
      
      if (index === -1) // product not found in the cart
        favi.push({id: id, count: 1})
      else
        favi[index].count++ // increase the "count" by +1
      
      setFavi([...favi])
    }

  return (
    <>
    <Router>
      <Switch>
        <ProductsContext.Provider value={productsAr}>
          <CartContext.Provider value={{data: cart, updater: addToCart}}>
          <FaviContext.Provider value={{data: favi, updater: addToFavi}}>
            <Switch>
                  <Route exact path="/"><Products data={productsAr} page_tit={"SHOP"}/></Route>
                  <Route  path="/single_product/:slug"><Single_product page_tit={"PRODUCT"}/></Route>
                  <Route  path="/cart"> <Checkout page_tit={"CART"}/> </Route>
                  <Route  path="/favorite"> <Favorite page_tit={"FAVORITE"}/> </Route>
                  <Route path="*"> <Products data={productsAr} page_tit={"SHOP"}/> </Route>
              </Switch>
          </FaviContext.Provider>
          </CartContext.Provider >
        </ProductsContext.Provider>  
      </Switch>
    </Router>
    </>
  )
}

export default App