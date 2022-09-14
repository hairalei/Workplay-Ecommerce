import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config';
import { signOut } from 'firebase/auth';
import { Loading } from '../components';
import { useUserContext } from '../context/userContext';

function LogOut() {
  const [isLoading, setIsLoading] = useState(true);
  const { setCurrentUser } = useUserContext();
  const navigate = useNavigate('/');

  const logout = async () => {
    setIsLoading(true);
    try {
      await signOut(auth);
      setCurrentUser(null);
      window.localStorage.setItem('workplayUser', JSON.stringify(null));
    } catch (error) {
      alert(error.message);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    logout();

    const timeout = setTimeout(() => {
      navigate('/');
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) return <Loading />;

  return <></>;
}

export default LogOut;
