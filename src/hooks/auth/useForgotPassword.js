import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_VERIFY_TOKEN} from '../../constants/navigations';

const useForgotPassword = email => {
  const navigation = useNavigation();
  const mutation = useMutation(user => apiService.forgotPassword(user), {
    onSuccess: async res => {
      if (email.email) {
        navigation.navigate(URL_VERIFY_TOKEN, {...email});
      }
    },
  });

  const {isLoading, error, data, reset} = mutation;
  const handleForgotPassword = data => {
    console.log(error, data);
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };


  return {handleForgotPassword, error, isLoading, data, reset};
};

export default useForgotPassword; 

