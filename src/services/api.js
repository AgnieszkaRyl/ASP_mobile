import { mapListRequestResponse } from '../utils/apiHelpers';
import { axios } from './axios';

export const getNotifications = () =>
  axios.get('/notifications').then(mapListRequestResponse);

export const getEventPosts = () =>
  axios.get('/event-posts').then(mapListRequestResponse);
