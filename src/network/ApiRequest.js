import axios from 'axios';
import {utils} from '../utils/Utils';

const BASE_URL =
  'http://ec2-3-7-0-164.ap-south-1.compute.amazonaws.com:8080/api/';

const STATUS = {
  SUCCESS: 'success',
  ERROR: 'error',
};
const RESPONSE = {
  status: STATUS,
  data: null,
  error: null,
};

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 3000,
});

callAPIs = async (apiMethodToCall) => {
  const response = {...(await apiMethodToCall)};
  
  if (response.status === 200) {
    RESPONSE.status = STATUS.SUCCESS;
    RESPONSE.data = response.data;
  } else {
    RESPONSE.status = STATUS.ERROR;
  }
  return RESPONSE;
};

getData = () => {
  return apiClient.get('v1/group/test');
};

export const apiRequest = {
  callAPIs,
  STATUS,
  getData,
};
