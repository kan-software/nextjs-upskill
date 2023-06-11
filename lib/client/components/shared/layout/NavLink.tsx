import { PropsWithChildren } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';

export type NavLinkButtonProps = PropsWithChildren<{
  href: string;
}>;

export function NavLinkButton({ href, children }: NavLinkButtonProps) {
  const router = useRouter();
  const isPageActive = (page: string) => router.pathname === page;

  return (
    <Link href={href}>
      <Button
        sx={{ color: 'primary.contrastText' }}
        {...(isPageActive(href)
          ? { variant: 'contained', color: 'secondary' }
          : {})}
      >
        {children}
      </Button>
    </Link>
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
