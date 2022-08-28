import React, { useContext, useState, useEffect } from 'react';

const UserContext = React.createContext();

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [number, setNumber] = useState(5);

  // useEffect(() => {
  //     setMyUser()
  // }, [input])

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser, number }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUserContext = () => {
  return useContext(UserContext);
};
