import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB} from '../../constants/navigations';

const useEditBio = (userId) => {
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.editBio(user, userId), {
    onSuccess: async res => {
      // console.log('res123', res);
      navigation.navigate(URL_TAB);
    },
  });
  const {isLoading, error, data, reset} = mutation;
  const handleEditBio = (data) => {
    if (error || data) {
      reset();
    }
    mutation.mutate(data);
  };

  return {handleEditBio, error, isLoading, data, reset};
};

export default useEditBio; 
