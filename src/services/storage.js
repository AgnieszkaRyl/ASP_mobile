import React, { useContext, useEffect, useState } from 'react';
import * as api from './api';

const StorageContext = React.createContext({});

export const useStorage = () => useContext(StorageContext);

export const StorageProvider = ({ children }) => {
  const [storage, setStorage] = useState({
    notifications: [],
    eventPosts: [],
  });

  useEffect(() => {
    const updateStorage = fieldName => newValue =>
      setStorage(prev => ({
        ...prev,
        [fieldName]: newValue,
      }));

    api.getNotifications().then(updateStorage('notifications'));
    api.getEventPosts().then(updateStorage('eventPosts'));
  }, []);

  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  );
};
