import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS, URL_CAPTURE} from '../../constants/navigations';

const useGetSingleAchievements = () => {
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.getSingleAchievements(user), {
    onSuccess: async (singleCapture) => {
    //  let newData=  await nData
      console.log(singleCapture,"wsingleCaptureA");
      // console.log('tags gotten', {newData, aData});
      navigation.navigate( URL_CAPTURE, {captureData: singleCapture});
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleGetSingleAchievements = (data) => {
    // if (error || data) {
    //   reset();
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleGetSingleAchievements, error, onLoad:isLoading, data, reset};
};



// const useCaptureAchievement = (dataObj) => {
//   const {data, error, isLoading} = useQuery('capture', () => apiService.captureAchievement(dataObj));
//   console.log('foo', data)
//   return {data, error, isLoading};
// };

// export default useGetResendAccount;
export default useGetSingleAchievements;
