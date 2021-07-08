  
import React from 'react'
import Header from 'components/Header'
import Footer from 'components/Footer'

const Layout = ({children}) => {

  return (
    <>
      <Header />
      
      {/* <!--------- Main content ----------> */}
      <main className="products">
        {children}
      </main>

      <Footer />
    </>
  )
}

export default Layout