import React, { useContext, useEffect, useState } from 'react';
import * as api from './api';

const StorageContext = React.createContext({});

export const useStorage = () => useContext(StorageContext);

export const StorageConsumer = StorageContext.Consumer;

export const StorageProvider = ({ children }) => {
  const [storage, setStorage] = useState({
    isLoading: true,
    notifications: [],
    anniversaryPosts: [],
    events: [],
  });

  useEffect(() => {
    const updateStorage = fieldName => newValue =>
      setStorage(prev => ({
        ...prev,
        [fieldName]: newValue,
      }));

    Promise.all([
      api.getNotifications().then(updateStorage('notifications')),
      api.getAnniversaryPosts().then(updateStorage('anniversaryPosts')),
      api.getEvents().then(updateStorage('events')),
    ])
      .catch(console.warn)
      .finally(() => updateStorage('isLoading')(false));
  }, []);

  return (
    <StorageContext.Provider value={storage}>
      {children}
    </StorageContext.Provider>
  );
};
