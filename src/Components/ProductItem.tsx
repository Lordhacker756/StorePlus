import {Card, CardMedia, Rating, CardContent, CardActions, Typography, Button} from "@mui/material";

interface productProps{
  title:String;
  price:number;
  description:String;
  rating:number;
  pdtImage:string;
}

const ProductItem = ({title,price,description, rating, pdtImage}:productProps) => {
  return (
    <Card sx={{ maxWidth: 345}}>
          <CardMedia
            component="img"
            height="140"
            image={pdtImage}
            alt="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
             {description}
            </Typography>
            <Rating name="read-only" value={rating} readOnly />
            <Typography variant="body1">{price}</Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Add to Cart</Button>
            <Button size="small">Buy Now</Button>
          </CardActions>
        </Card>
  )
}

export default ProductItem