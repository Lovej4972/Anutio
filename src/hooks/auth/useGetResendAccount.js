import {useQuery} from 'react-query';
import apiService from '../../services/apiService';

const useGetResendAccount = () => {
  const {data, error} = useQuery('verify', () => apiService.resendVerification());
  console.log('222', data)
  return {data, error};
};

export default useGetResendAccount;
