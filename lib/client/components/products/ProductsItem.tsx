import Link from 'next/link';
import Image from 'next/image';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { IProduct } from '@/lib/server/models/products';

export type ProductsItemProps = {
  product: IProduct;
};

export function ProductsItem({ product }: ProductsItemProps) {
  const stockValues = Array.from(Array(product.stock).keys()).map(
    (index) => index + 1
  );

  const handleAddToBasket = () => {
    // TODO: implement add to basket
  };

  return (
    <Card
      sx={{
        maxWidth: 345,
      }}
    >
      <Link
        href={`/products/${product.productId}`}
        style={{ textDecoration: 'none' }}
      >
        <CardActionArea sx={{ height: '100%', textDecoration: 'none' }}>
          <CardMedia sx={{ position: 'relative' }}>
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
        <FormControl
          sx={{ m: 1 }}
          size="small"
        >
          <Select defaultValue={1}>
            {stockValues.map((value) => (
              <MenuItem
                key={value}
                value={value}
              >
                {value}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <Button
          size="small"
          color="primary"
          onClick={handleAddToBasket}
        >
          Add to basket
        </Button>
      </CardActions>
    </Card>
  );
}
