import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_RESET_PASSWORD} from '../../constants/navigations';

const useVerifyCode = ({email, resetCode}) => {
  const navigation = useNavigation();
  const mutation = useMutation(user => apiService.verifyCode(user), {
    onSuccess: async res => {
      navigation.navigate(URL_RESET_PASSWORD, {email, resetCode});
    },
  });
  const {isLoading, error, data, reset} = mutation;
  const handleVerifyCode = data => {
    // console.log(error);
    // if (error || data) {
    //   reset();
    // }
    mutation.mutate(data);
  };

  return {handleVerifyCode, error, isLoading, data, reset};
};

export default useVerifyCode;
