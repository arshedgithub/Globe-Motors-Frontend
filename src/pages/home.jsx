import { useEffect, useState } from "react";
import httpService from "../services/httpService";
import ProductCard from "../components/ProductCard";
import { Stack } from "@mui/material";

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
        <>
            <div style={{textAlign: "center"}}>
                <h2>Welcome to Globe Auto Parts</h2>
                <p>We are a leading automotive manufacturing company specializing in luxury vehicles. Our mission is to create exceptional vehicles that inspire and delight our customers. Feel free to explore our range of vehicles.</p>
            </div>
            <div>

                <h3>Our Products</h3>

                <div className="productList">
                    <Stack spacing={1} direction="row">
                        {products ? (products.map(product => <ProductCard key={product.id} product={product} />)) : ""}
                    </Stack>
                </div>
            </div>
        </>
    );
}

export default Home;