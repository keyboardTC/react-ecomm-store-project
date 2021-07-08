import React from 'react'
import Products from 'pages/Products'

const App = () => {

  // fetch() from the server, this is the result...
  const productsAr = [
    {
      id: 201,
      prod_img: '1b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product1',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 79.00],
      prod_rating: 4,
      prod_cat: ['red', 'dessert', 'white'],
      prod_weight: [500, 200],
    },
    {
      id: 202,
      prod_img: '6b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product2',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 39.00],
      prod_rating: 5,
      prod_cat: ['red', 'rose','white'],
      prod_weight: [100, 800]
    },
    {
      id: 203,
      prod_img: '3b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product3',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 410.00],
      prod_rating: 3,
      prod_cat: ['dessert', 'white'],
      prod_weight: [100, 200, 800]
    },
    {
      id: 204,
      prod_img: '5b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product4',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 79.00],
      prod_rating: 4,
      prod_cat: ['red','rose'],
      prod_weight: [100, 200]
    },
    {
      id: 205,
      prod_img: '5c.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product5',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 21.00],
      prod_rating: 1,
      prod_cat: ['red','rose', 'dessert'],
      prod_weight: [100, 200]
    },
    {
      id: 206,
      prod_img: '5a.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product6',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [30.00, 21.00],
      prod_rating: 4,
      prod_cat: ['red', 'dessert'],
      prod_weight: [200]
    },
    {
      id: 207,
      prod_img: '4c.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product7',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 15.00],
      prod_rating: 1,
      prod_cat: ['red','rose', 'dessert'],
      prod_weight: [100, 200, 300]
    },
    {
      id: 208,
      prod_img: '5b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product8',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 35.00],
      prod_rating: 5,
      prod_cat: ['red','rose', 'dessert'],
      prod_weight: [100]
    },
    {
      id: 209,
      prod_img: '3b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product9',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 11.00],
      prod_rating: 2,
      prod_cat: ['red','rose'],
      prod_weight: [100, 200]
    },
    {
      id: 210,
      prod_img: '5c.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product10',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [80.00, 27.00],
      prod_rating: 2,
      prod_cat: ['rose', 'dessert'],
      prod_weight: [300]
    },
    {
      id: 211,
      prod_img: '1b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product11',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [90.00, 30.00],
      prod_rating: 2,
      prod_cat: ['rose'],
      prod_weight: [100, 200, 300]
    },
    {
      id: 212,
      prod_img: '5b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product12',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 15.00],
      prod_rating: 5,
      prod_cat: ['red','rose', 'dessert'],
      prod_weight: [100, 200]
    },
    {
      id: 213,
      prod_img: '5c.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product13',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 30.00],
      prod_rating: 1,
      prod_cat: ['dessert'],
      prod_weight: [100, 300]
    },
    {
      id: 214,
      prod_img: '5c.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product14',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [70.00, 21.00],
      prod_rating: 1,
      prod_cat: ['rose', 'dessert'],
      prod_weight: [100, 200]
    },
    {
      id: 215,
      prod_img: '5a.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product15',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 15.00],
      prod_rating: 3,
      prod_cat: ['red', 'dessert'],
      prod_weight: [300, 200]
    },
    {
      id: 216,
      prod_img: '1b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product16',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 20.00],
      prod_rating: 3,
      prod_cat: ['red','rose', 'dessert'],
      prod_weight: [100, 200]
    },
    {
      id: 217,
      prod_img: '3b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product17',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 41.00],
      prod_rating: 4,
      prod_cat: ['red','rose', 'dessert'],
      prod_weight: [100, 200, 300]
    },
    {
      id: 218,
      prod_img: '4c.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product18',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 18.00],
      prod_rating: 2,
      prod_cat: ['rose'],
      prod_weight: [100, 200]
    },
    {
      id: 219,
      prod_img: '5a.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product19',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 41.00],
      prod_rating: 1,
      prod_cat: ['red'],
      prod_weight: [100, 200]
    },
    {
      id: 220,
      prod_img: '6b.jpg',
      prod_link: 'product-page.html',
      prod_name: 'Product20',
      prod_desc: 'Here is a shot of this product that might entice a user to click and add it to their cart.',
      prod_prices: [50.00, 20.00],
      prod_rating: 2,
      prod_cat: ['red','rose', 'dessert'],
      prod_weight: [100, 300]
    }
  
  ]


  

  // Generate one StudentRow per object above.

  return (
    <Products data={productsAr} />
  )
}

export default App