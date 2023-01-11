import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS} from '../../constants/navigations';

const useGetSkilsMatched = () => {
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.getSkillsMatched(), {
    onSuccess: async (goalDate) => {
    //  let newData=  await nData
      console.log("success mm");
      // console.log('tags gotten', {newData, aData});
      // navigation.navigate( );
      console.log('gdg');
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleGetSkillsMatched = (data) => {
    console.log('====================================');
    console.log(data);
    console.log('====================================');
    // if (error || data) {
    //   reset();
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleGetSkillsMatched, error, isLoading, data, reset};
};



// const useCaptureAchievement = (dataObj) => {
//   const {data, error, isLoading} = useQuery('capture', () => apiService.captureAchievement(dataObj));
//   console.log('foo', data)
//   return {data, error, isLoading};
// };

// export default useGetResendAccount;
export default useGetSkilsMatched;
