  
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({children, page_title}) => {

  const page_class = page_title === "SHOP" ? "products" : " main-product"

  console.log(page_class)

  return (
    <>
      <Header page_title = {page_title} />
      		<div  class="alert-box success">Successfully Added !!!</div>
      {/* <!--------- Main content ----------> */}
      <main className={page_class}>
        {/* <div  class="alert-box success">Successful Alert !!!</div> */}
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout