import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS} from '../../constants/navigations';

const useGetProjects = () => {
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.getProjects(user), {
    onSuccess: async (rdataProjects) => {
    //  let newData=  await nData
      console.log(rdataProjects,"jsuccess mm");
      // console.log('tags gotten', {newData, aData});
      // navigation.navigate( );
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleGetProjects = (data) => {
    // if (error || data) {
    //   reset();
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleGetProjects, error, isLoading, data, reset};
};



// const useCaptureAchievement = (dataObj) => {
//   const {data, error, isLoading} = useQuery('capture', () => apiService.captureAchievement(dataObj));
//   console.log('foo', data)
//   return {data, error, isLoading};
// };

// export default useGetResendAccount;
export default useGetProjects;
