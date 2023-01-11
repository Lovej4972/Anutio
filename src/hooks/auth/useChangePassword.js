import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_RESET_PASSWORD_SUCCESS} from '../../constants/navigations';

const useChangePassword = () => {
  const navigation = useNavigation();
  const mutation = useMutation(user => apiService.resetPassword(user), {
    onSuccess: async res => {
      navigation.navigate(URL_RESET_PASSWORD_SUCCESS);
    },
  });
  const {isLoading, error, data, reset} = mutation;
  const handleChangePassword  = data => {
    console.log(error, data);
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };

  return {handleChangePassword, error, isLoading, data, reset};
};

export default useChangePassword;
