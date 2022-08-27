import { auth } from '../firebase/firebase.config';
import { signOut } from 'firebase/auth';

export const useLogout = () => {
  const logout = () => {
    signOut(auth)
      .then(() => {
        console.log('user out');
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return { logout };
};
