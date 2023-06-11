import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import { IProduct } from '@/lib/server/models/products';
import { ProductsQuantitySelect } from '../shared/ProductsQuantitySelect';

export type ProductsItemProps = {
  product: IProduct;
};

export function ProductsItem({ product }: ProductsItemProps) {
  const handleAddToBasket = () => {
    // TODO: implement add to basket
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <Link href={`/products/${product.productId}`}>
        <CardActionArea>
          <CardMedia>
            <Image
              priority
              src={product.image}
              width={345}
              height={345}
              alt={product.title}
              style={{ objectFit: 'contain' }}
            />
          </CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              color="text.primary"
              minHeight={65}
            >
              {product.title}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
            >
              Price: {product.price}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
      <CardActions>
        {product.stock > 0 ? (
          <>
            <ProductsQuantitySelect stock={product.stock} />
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddToBasket}
            >
              Add to basket
            </Button>
          </>
        ) : (
          <Typography>Out of stock</Typography>
        )}
      </CardActions>
    </Card>
  );
}
