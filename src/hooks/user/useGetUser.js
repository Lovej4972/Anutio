import {useQuery} from 'react-query';
import apiService from '../../services/apiService';

const useGetUser =  () => {
  const {data, error, isSuccess} = useQuery(
    ['user'],
    apiService.getUserProfile,
    {
      onSuccess: res => console.log('userll', res),
      onError: err => console.log("afrol", err),
    },
  );
  const {_id, email, fullName, phone, interest, goals, funFact} = data || {};
  // console.log('userData', data)

  
  return {
    data,
    isSuccess,
  };
};

export default useGetUser;
