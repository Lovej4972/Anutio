import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS} from '../../constants/navigations';

const useGetGoal = () => {
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.getGoal(user), {
    onSuccess: async (goalDate) => {
    //  let newData=  await nData
      console.log("success mm");
      // console.log('tags gotten', {newData, aData});
      // navigation.navigate( );
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleGetGoal = (data) => {
    // if (error || data) {
    //   reset();
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleGetGoal, error, isLoading, data, reset};
};



// const useCaptureAchievement = (dataObj) => {
//   const {data, error, isLoading} = useQuery('capture', () => apiService.captureAchievement(dataObj));
//   console.log('foo', data)
//   return {data, error, isLoading};
// };

// export default useGetResendAccount;
export default useGetGoal;
