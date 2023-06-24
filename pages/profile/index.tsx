import { GetServerSideProps } from 'next';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  ProfileContainer,
  UserDataContainer,
} from '@/lib/client/components/profile/Profile.styles';
import { useAuth } from '@/lib/client/utils/AuthProvider';
import userService from '@/lib/server/services/user';
import { useLogout } from '@/lib/client/mutations/user';

export const getServerSideProps: GetServerSideProps = async () => {
  const isUserLoggedIn = userService.isUserLoggedIn();

  if (!isUserLoggedIn) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
};

export default function Profile() {
  const { getUser } = useAuth();
  const user = getUser();
  const logoutMutation = useLogout();

  const handleLogout = () => {
    logoutMutation.mutate(user!.userId);
  };

  return (
    <ProfileContainer>
      {logoutMutation.isError && (
        <Typography
          textAlign="center"
          color="error"
          gutterBottom
        >
          Something went wrong!
        </Typography>
      )}
      <Typography
        variant="h4"
        gutterBottom
      >
        Account
      </Typography>
      {user ? (
        <>
          <UserDataContainer>
            <Typography gutterBottom>
              Name: {`${user.firstName} ${user.lastName}`}
            </Typography>
            <Typography gutterBottom>Login: {user.login}</Typography>
          </UserDataContainer>
          <Button
            fullWidth
            type="submit"
            size="large"
            variant="contained"
            onClick={handleLogout}
          >
            Logout
          </Button>
        </>
      ) : (
        <Typography>Loading...</Typography>
      )}
    </ProfileContainer>
  );
}
