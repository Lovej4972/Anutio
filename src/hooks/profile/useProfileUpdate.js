import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_PROFILE, URL_TAB} from '../../constants/navigations';

const useProfileUpdate = (userId) => {
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.profileUpdate(user, userId), {
    onSuccess: async res => {
      // console.log('res123', res);
      navigation.navigate(URL_PROFILE);
    },
  });
  const {isLoading, error, data, reset} = mutation;
  const handleProfileUpdate = (data) => {
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };

  return {handleProfileUpdate, error, isLoading, data, reset};
};

export default useProfileUpdate;
