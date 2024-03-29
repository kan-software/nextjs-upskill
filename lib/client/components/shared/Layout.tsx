import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useAuth } from '../../utils/AuthProvider';
import { NavLinkButton, NavLinkIconButton } from './layout/NavLink';

export function Layout({ children }: React.PropsWithChildren) {
  const { isLoggedIn } = useAuth();

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
          <NavLinkButton href="/">Products</NavLinkButton>
          <NavLinkButton href="/blog">Blog</NavLinkButton>
          <NavLinkButton href="/faq">FAQ</NavLinkButton>
          <NavLinkIconButton
            href="/cart"
            label="shopping cart"
          >
            <ShoppingCartIcon />
          </NavLinkIconButton>
          {isLoggedIn() ? (
            <NavLinkIconButton
              href="/profile"
              label="profile"
            >
              <AccountCircleIcon />
            </NavLinkIconButton>
          ) : (
            <NavLinkIconButton
              href="/login"
              label="login"
            >
              <LockOpenIcon />
            </NavLinkIconButton>
          )}
        </Toolbar>
      </AppBar>
      <main>{children}</main>
    </>
  );
}
