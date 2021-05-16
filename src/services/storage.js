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
    facultyStuff: [],
    departments: [],
    workrooms: [],
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
      api.getFacultyStuff().then(updateStorage('facultyStuff')),
      api.getDepartments().then(updateStorage('departments')),
      api.getWorkrooms().then(updateStorage('workrooms')),
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
