import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import asyncStorageService from '../../services/asyncStorageService';
import {URL_TAB} from '../../constants/navigations';

const useLogin = () => {
  const navigation = useNavigation();
  const mutation = useMutation(user => apiService.login(user), {
    onSuccess: async res => {
      // console.log('res', res)
      await asyncStorageService.setToken(res.token);
      navigation.navigate(URL_TAB);
      console.log(res.token, '...gitoken');
    },
  });
  const {isLoading, error, data, reset} = mutation;
  const handleLogin = data => {
    console.log(error);
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };

  return {handleLogin, error, isLoading, data, reset};
};

export default useLogin;
