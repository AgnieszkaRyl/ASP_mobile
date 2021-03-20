import { mapListRequestResponse } from '../utils/apiHelpers';
import { axios } from './axios';

export const getNotifications = () =>
  axios.get('/notifications').then(mapListRequestResponse);

export const getAnniversaryPosts = () =>
  axios.get('/anniversary-posts').then(mapListRequestResponse);

export const getEvents = () =>
  axios.get('/events').then(mapListRequestResponse);
