import React, { createContext, useState, useMemo } from 'react';

// 1. Create the context
export const MyContext = createContext();

export const MyProvider = ({ children }) => {
  const [user, setUser] = useState({ name: "Guest" });
  const [customers, setCustomer] = useState([]);

  // 2. Wrap multiple values in an object and memoize it
  const value = useMemo(() => ({
    user,
    setUser,
    customers,
    setCustomer
  }), [user, customers]);

  return (
    <MyContext.Provider value={value}>
      {children}
    </MyContext.Provider>
  );
};

export default MyProvider;

