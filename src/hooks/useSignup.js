import { useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const useSignup = () => {
  const [error, setError] = useState(null);

  const signup = async (email, password, displayName) => {
    setError(null);
    try {
      const res = await createUserWithEmailAndPassword(auth, email, password);
      console.log(res);

      if (res.user.email) {
        try {
          console.log(auth.currentUser);
          await updateProfile(auth.currentUser, {
            displayName: displayName,
          });
        } catch (error) {
          console.log(error);
        }
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return { error, signup };
};
