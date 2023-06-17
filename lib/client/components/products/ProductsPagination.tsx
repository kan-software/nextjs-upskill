import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';

export type ProductsPaginationProps = {
  page: number;
  totalPages: number;
};

export function ProductsPagination({
  page,
  totalPages,
}: ProductsPaginationProps) {
  const router = useRouter();

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    router.push({
      href: router.pathname,
      query: { ...router.query, page: newPage },
    });
  };

  return (
    <Pagination
      color="primary"
      count={totalPages}
      page={page}
      onChange={handlePaginationChange}
    />
  );
}
