import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import Product from "../components/Product";

const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(() => {

        const fetchProducts = async () => {
            try {
                const response = await httpService.get("http://localhost:3200/api/products")
                setProducts(response.data);
            } catch (error) {
                console.log("Error fetching products : " + error.message);
            }
        }

        fetchProducts();

    }, []);

    return (
        <div>
            <h1>Welcome to Globe Motors</h1>
            <p>We are a leading automotive manufacturing company specializing in luxury vehicles.</p>
            <p>Our mission is to create exceptional vehicles that inspire and delight our customers.</p>
            <p>Feel free to explore our range of vehicles.</p>

            <h2>Our Products</h2>

            {products ? (products.map(product => <Product key={product.id} product={product} />)): ""}
        </div>
    );
}

export default Home;