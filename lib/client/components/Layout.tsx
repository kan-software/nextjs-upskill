import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockOpenIcon from '@mui/icons-material/LockOpen';

const sxColor = { color: 'primary.contrastText' };

export function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1 }}
          >
            E-commerce
          </Typography>
          <Link href="/">
            <Button sx={sxColor}>Products</Button>
          </Link>
          <Link href="/blog">
            <Button sx={sxColor}>Blog</Button>
          </Link>
          <Link href="/faq">
            <Button sx={sxColor}>FAQ</Button>
          </Link>
          <Link href="/cart">
            <IconButton
              aria-label="shopping cart"
              size="large"
              sx={sxColor}
            >
              <ShoppingCartIcon />
            </IconButton>
          </Link>
          <Link href="/login">
            <IconButton
              aria-label="login"
              size="large"
              sx={sxColor}
            >
              <LockOpenIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </>
  );
}
