import React from 'react'
import Image from 'components/Image'

const ProductRow = ({data}) => {
  const {id, prod_img, prod_link, prod_name, prod_desc, prod_prices, prod_rating, prod_cat, prod_weight} = data

   // State will hold the image url

//  const [img, setImg] = useState(``)

//  import(`img/${photo}`).then((image) => setImg(image.default))

    const article_item = document.createElement('article')
    // Adding class name product to the article created
    article_item.classList.add('product')

    console.log(article_item)
    article_item.innerHTML = `<p>Hello</p>`

    let the_r = []
    for (let x = 0; x < 5; x++) {
        if (prod_rating > x) {
            the_r.push(<span className="material-icons">star</span>)
        } else {
            the_r.push(<span className="material-icons">star_border</span>)
        }
    }

    const the_w = prod_weight.map((wght) => <li><label><input type="radio" name="size" value="m" key={id}/>{wght}g</label></li>)
    const the_c = prod_cat.map((cat) => <li><label><input type="radio" name="category" value="r"/>{cat}</label></li>)



    
    return (
        <article className="product">
            <Image src={prod_img} alt={prod_name} className="p_image"/>
            {/* <img src={p_Img} alt={prod_name} className="p_image" /> */}
            <div className="prod-details">
                <h3><a href={prod_link}>{prod_name}</a></h3>
                <p>${prod_desc} <a href={prod_link}>see more</a></p>
                <dl className="rating">
                    <data value={prod_prices[1]}><del>${prod_prices[0]}</del> <ins>${prod_prices[1]}</ins></data>
                    <dd><p>Rating : {prod_rating}</p>
                    {the_r}</dd>
                </dl>
            
                <form className="iterm-properties">
                    <fieldset>
                    <legend>Category</legend>
                    <ul>
                        {the_c}
                    </ul>
                    </fieldset>
                    <fieldset>
                    <legend>Weight in grams</legend>
                    <ol className="weight">
                        {the_w}
                    </ol>
                    </fieldset>
                </form>
                <div className="prodcut-list-cart">
                    <button type="button" className="add-to-cart-btn"><i className="fa fas fa-shopping-cart"></i> Add to Cart</button>
                    <button type="button" className="add-to-fav"><i className="fa far fa-heart" name="Whist List"></i></button>
                </div>
            </div>
        </article>
    )
}

export default ProductRow