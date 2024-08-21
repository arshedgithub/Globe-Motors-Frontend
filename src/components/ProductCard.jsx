import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";

const ProductCard = ({ product }) => {

    const { name, price, product_brand: brand } = product;
    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                alt="green iguana"
                height="200"
                image="./products/headlamp.webp"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {name}
                </Typography>
                <Typography variant="body1" color="text.secondary">
                    Rs. {price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {brand.name}
                </Typography>
            </CardContent>
            <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
            </CardActions>
        </Card>
    );
}

export default ProductCard;