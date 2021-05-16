import { mapListRequestResponse } from '../utils/apiHelpers';
import { axios } from './axios';

export const getNotifications = () =>
  axios.get('/notifications').then(mapListRequestResponse);

export const getAnniversaryPosts = () =>
  axios.get('/anniversary-posts').then(mapListRequestResponse);

export const getEvents = () =>
  axios.get('/events').then(mapListRequestResponse);

export const getFacultyStuff = () =>
  axios.get('/faculty-stuff').then(response => response.data);

export const getDepartments = () =>
  axios.get('/departments').then(response => response.data);

export const getWorkrooms = () =>
  axios.get('/workrooms').then(response => response.data);
