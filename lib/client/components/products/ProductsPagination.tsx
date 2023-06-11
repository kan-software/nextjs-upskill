import { useRouter } from 'next/router';
import Pagination from '@mui/material/Pagination';

export function ProductsPagination() {
  // TODO: implement totalPages value for pagination
  const router = useRouter();
  const currentPage = router.query.page ? +router.query.page : 1;

  const handlePaginationChange = (
    event: React.ChangeEvent<unknown>,
    page: number
  ) => {
    router.push({
      href: router.pathname,
      query: { ...router.query, page },
    });
  };

  return (
    <Pagination
      color="primary"
      count={10}
      page={currentPage}
      onChange={handlePaginationChange}
    />
  );
}
