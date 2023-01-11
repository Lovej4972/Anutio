import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS, URL_HOME} from '../../constants/navigations';

const useFinalCaptureAchievement = (captureStrings) => {
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.finalCaptureAchievement(user), {
    onSuccess: async (finalCaptureData) => {
    //  let newData=  await nData
      console.log(finalCaptureData,"...sfinal");
      // console.log('tags gotten', {newData, aData});
      navigation.navigate(URL_HOME );
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleFinalCaptureAchievement = (data) => {
    // if (error || data) {
    //   reset();
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleFinalCaptureAchievement, error, onload:isLoading , data, reset};
};



// const useCaptureAchievement = (dataObj) => {
//   const {data, error, isLoading} = useQuery('capture', () => apiService.captureAchievement(dataObj));
//   console.log('foo', data)
//   return {data, error, isLoading};
// };

// export default useGetResendAccount;
export default useFinalCaptureAchievement;
