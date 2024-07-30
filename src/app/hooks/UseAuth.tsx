// src/app/hooks/useAuth.ts
import { useEffect, useState } from 'react';
import { auth } from '../firebase/firebase';
import { User, onAuthStateChanged } from 'firebase/auth';

const useAuth = () => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);

  return user;
};

export default useAuth;
