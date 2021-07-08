import React, {useState} from 'react'
import Layout from 'components/Layout'
// import SearchFilter from 'components/SearchFilter'
import SearchResults from 'components/SearchResults'

const Products = ({data}) => {

  const [searchState, setSearchState] = useState({
    catergories: [],
    weight: [],
    rating: 0,
    sort: (a, b) => a.prod_prices[1] - b.prod_prices[1]
  })

  // For convenience, destructure all of the values into local variables
  const {catergories, weight, rating, sort} = searchState

  // ****** FILTER ******
  // Filter the results into a new array that's the same size or smaller
  const filteredArray = data.filter(({prod_rating}) => rating == prod_rating || rating === 0 ) 
                                  .filter(({prod_cat}) => catergories.length === 0 || 
                                                        prod_cat.filter((cat) => catergories.includes(cat)).length > 0)
                                  .filter(({prod_weight}) => weight.length === 0 || 
                                                        prod_weight.filter((wght) => weight.includes(wght)).length > 0) 
                                  .sort(sort)  

const onCategoryChange = ({target}) => {

  if (target.checked) {
    setSearchState({
      ...searchState,
      catergories: [...searchState.catergories, target.value]
    })
  } else {
    setSearchState({
      ...searchState,
      catergories: searchState.catergories.filter((catergory) => catergory !== target.value)
    })
  }
}  

const onWeightChange = ({target}) => {

  if (target.checked) {
    setSearchState({
      ...searchState,
      weight: [...searchState.courses, target.value]
    })
  } else {
    setSearchState({
      ...searchState,
      weight: searchState.weight.filter((wght) => wght !== target.value)
    })
  }
}  

const onRatingChange = (event) => {

  setSearchState({
    ...searchState,
    rating: event.target.value
  })
}

const handleSortChange = ({target}) => {

  console.log(target.value)

  let sorting
  if (target.value === "0") {
    sorting = (a, b) => a.prod_prices[1] - b.prod_prices[1]
    // console.log(b.prod_prices[1] )
  } else if (target.value === "1") {
    sorting = (a, b) => b.prod_prices[1] - a.prod_prices[1]
    console.log(sorting)
  }

  setSearchState({
    ...searchState,
    sort: sorting
  })
}

  return (
    <Layout>

{/* <!-- Side Bar--> */}
      <aside className="sidebar">
        {/* <!-- Filtering product form -->     */}

        <div className="filter-toggle">
          <button type="button" className="filt-toggle" name="filter button">
            {/* <!-- <span class="material-icons">menu</span> --> */}
            <i className="fa fa-bars fa-2x"></i>
          </button>            
          <h2>Filters</h2>
        </div>

        <form className="filters m-hide">
          <div className="filter-options">
            <fieldset id="filterCategory" onChange={onCategoryChange}  >
              <legend>Category</legend>
              <ul className="filter-list">
                <li>
                  <input type="checkbox" name="filt_cat" value="dessert" id="dessert-wine" className="checkbox.hide" /> 
                  <label htmlFor="dessert-wine"><div className="control-me"></div>Dessert Wine</label>  
                </li>
                <li>
                  <input type="checkbox" name="filt_cat" value="rose" id="rose-wine" className="checkbox.hide" /> 
                  <label htmlFor="rose-wine"><div className="control-me"></div>Rose Wine</label>
                </li>
                <li>
                  <input type="checkbox" name="filt_cat" value="red" id="red-wine" className="checkbox.hide" /> 
                  <label htmlFor="red-wine"><div className="control-me"></div>Red Wine</label>
                  
                </li>
                <li>
                  <input type="checkbox" name="filt_cat" value="white" id="white-wine" className="checkbox.hide" /> 
                  <label htmlFor="white-wine"><div className="control-me"></div>White Wine</label>
                  
                </li>
              </ul>
            </fieldset>
            <fieldset id="filterWeight" onChange={onWeightChange } >
              <legend>Weight</legend>
              <ol className="filter-list">
                <li>
                  <input type="checkbox" name="filt_weight" value="100" id="100g" className="checkbox.hide" />
                  <label htmlFor="100g"><div className="control-me"></div>100g</label>
                  
                </li>
                <li>
                  <input type="checkbox" name="filt_weight" value="200" id="200g" className="checkbox.hide" />
                  <label htmlFor="200g"><div className="control-me"></div>200g</label>
                  
                </li>
                <li>
                  <input type="checkbox" name="filt_weight" value="500" id="500g" className="checkbox.hide" /> 
                  <label htmlFor="500g"><div className="control-me"></div>500g</label>
                  
                </li>
                <li>
                  <input type="checkbox" name="filt_weight" value="800" id="800g" className="checkbox.hide" />
                  <label htmlFor="800g"><div className="control-me"></div>800g</label>
                  
                </li>
              </ol>
            </fieldset>
            <fieldset id="rating" onChange={onRatingChange}>
              <legend>Ratings (above)</legend>
              <ol className="filter-list">
                <li>
                  <input type="radio" name="rating" value="4" id="aboveFour" className="checkbox.hide" />
                  <label htmlFor="aboveFour" className="rating">
                    <span className="material-icons">star</span><span className="material-icons" >star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span>
                    <div className="control-me"></div>
                  </label>
                  
                </li>
                <li>
                  <input type="radio" name="rating" value="3" id="aboveThree" className="checkbox.hide" />
                  <label htmlFor="aboveThree" className="rating">
                    <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                    <div className="control-me"></div>
                  </label>
                  
                </li>
                <li>
                  <input type="radio" name="rating" value="2" id="aboveTwo" className="checkbox.hide" />
                  <label htmlFor="aboveTwo" className="rating">
                    <span className="material-icons">star</span><span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                    <div className="control-me"></div>
                  </label>
                  
                </li>
                <li>
                  <input type="radio" name="rating" value="1" id="aboveOne" className="radio.hide" />
                  <label htmlFor="aboveOne" className="rating">
                    <span className="material-icons">star</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span><span className="material-icons">star_border</span>
                    <div className="control-me"></div>
                  </label>
                  
                </li>
              </ol>
            </fieldset>
          </div>
          <fieldset>
            <label htmlFor="sort">Sort by</label>
            {/* <select name="sort" id="sortBy" className="sort" defaultValue="0" onChange={handleSortChange}> */}
            <select name="sort" id="sortBy" className="sort"  onChange={handleSortChange}>
              <option value="1">Price, highest to lowest</option>
              <option value="0">Price, lowest to highest</option>
            </select>
          </fieldset>
        </form>
      </aside>

      <SearchResults result={filteredArray} />

    </Layout>
  )
}

export default Products