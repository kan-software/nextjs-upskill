import { PropsWithChildren } from 'react';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Link from '../Link';

export type NavLinkButtonProps = PropsWithChildren<{
  href: string;
}>;

export function NavLinkButton({ href, children }: NavLinkButtonProps) {
  const router = useRouter();
  const isPageActive = (page: string) => router.pathname === page;

  return (
    <Button
      component={Link}
      href={href}
      sx={{ color: 'primary.contrastText' }}
      {...(isPageActive(href)
        ? { variant: 'contained', color: 'secondary' }
        : {})}
    >
      {children}
    </Button>
  );
}

export type NavLinkIconButtonProps = PropsWithChildren<{
  href: string;
  label: string;
}>;

export function NavLinkIconButton({
  href,
  children,
  label,
}: NavLinkIconButtonProps) {
  const router = useRouter();
  const isPageActive = (page: string) => router.pathname === page;

  return (
    <Link href={href}>
      <IconButton
        aria-label={label}
        size="large"
        sx={{
          color: 'primary.contrastText',
          ...(isPageActive(href)
            ? {
                backgroundColor: 'secondary.main',
                '&:hover': { backgroundColor: 'secondary.main' },
              }
            : {}),
        }}
      >
        {children}
      </IconButton>
    </Link>
  );
}
