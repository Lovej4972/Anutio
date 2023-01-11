import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import asyncStorageService from '../../services/asyncStorageService';
import {URL_TAB, URL_VERIFY_ACCOUNT} from '../../constants/navigations';


const useSignup = () => {
  const navigation = useNavigation();
  const mutation = useMutation(user => apiService.signup(user), {
    onSuccess: async res => {
      await asyncStorageService.setToken(res.token);
      navigation.navigate(URL_VERIFY_ACCOUNT, {email: res.user.email});
    },
  });

  
  const {isLoading, error, data, reset} = mutation;

  const handleSignup = data => {
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };

  return {handleSignup, error, isLoading, data, reset};
};

export default useSignup;
