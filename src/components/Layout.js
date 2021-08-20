  
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({children, page_title}) => {

  const page_class = page_title === "SHOP" ? "products" : " main-product"

  console.log(page_class)

  return (
    <>
      <Header page_title = {page_title} />
      
      {/* <!--------- Main content ----------> */}
      <main className={page_class}>
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout