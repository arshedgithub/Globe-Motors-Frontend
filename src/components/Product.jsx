const Product = ({product}) => {

    const {name, description, price, stock, product_brand: brand, product_category: category, product_origin: origin } = product;
    return ( 
        <div id="productCard">
            <h2>{name}</h2>
            <p>{description}</p>
            <h3>Rs. {price}</h3>
            <p>Stock: {stock}</p>
            <p>Brand: {brand.name}</p>
            <p>Category: {category.name}</p>
            <p>Origin: {origin.name}</p>
        </div>
     );
}
 
export default Product;