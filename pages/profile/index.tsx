import { GetServerSideProps } from 'next';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import {
  ProfileContainer,
  UserDataContainer,
} from '@/lib/client/components/profile/Profile.styles';
import { useAuth } from '@/lib/client/utils/AuthProvider';
import userService from '@/lib/server/services/user';

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

  const handleLogout = () => {
    // TODO: implement handle logout
  };

  return (
    <ProfileContainer>
      <Typography
        variant="h4"
        gutterBottom
      >
        Account
      </Typography>
      <UserDataContainer>
        {user ? (
          <>
            <Typography gutterBottom>
              Name: {`${user.firstName} ${user.lastName}`}
            </Typography>
            <Typography gutterBottom>Login: {user.login}</Typography>
          </>
        ) : (
          <Typography>Loading...</Typography>
        )}
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
    </ProfileContainer>
  );
}
