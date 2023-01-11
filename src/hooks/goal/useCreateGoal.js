import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS, URL_GOALS} from '../../constants/navigations';
import { useState } from 'react';

const useCreateGoal = (goal) => {
  const [goalSuccess, setGoalSuccess] = useState(false)
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.createGoal(user), {
    
    onSuccess: async (goalDate) => {
    //  let newData=  await nData
      console.log("success mm");
      setGoalSuccess(true)
      // console.log('tags gotten', {newData, aData});
      navigation.navigate(URL_GOALS);
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleCreateGoal = (data) => {
    // if (error || data) {
    //   reset();
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleCreateGoal, error, isLoading, data, reset, goalSuccess};
};



// const useCaptureAchievement = (dataObj) => {
//   const {data, error, isLoading} = useQuery('capture', () => apiService.captureAchievement(dataObj));
//   console.log('foo', data)
//   return {data, error, isLoading};
// };

// export default useGetResendAccount;
export default useCreateGoal;
