import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_PROFILE_COMPLETION} from '../../constants/navigations';

const useVerifyAccount = () => {
  const navigation = useNavigation();
  const mutation = useMutation(user => apiService.verifyAccount(user), {
    onSuccess: async res => {
      navigation.navigate(URL_PROFILE_COMPLETION);
    },
  });
  const {isLoading, error, data, reset} = mutation;
  const handleVerifyAccount = data => {
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };

  return {handleVerifyAccount, error, isLoading, data, reset};
};

export default useVerifyAccount;
