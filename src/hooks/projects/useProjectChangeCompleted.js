import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS, URL_GOALS, URL_PROJECTS} from '../../constants/navigations';
import { useState } from 'react';

const useProgressChangeCompleted = () => {
  const [goalSuccess, setGoalSuccess] = useState(false)
  const navigation = useNavigation();
  const mutation = useMutation((data) => apiService.progressChangeCompleted(data), {
    
    onSuccess: async (completed) => {
      console.log(completed," ...projetsCompleted");
   
      navigation.navigate(URL_PROJECTS );
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleProgressChangeCompleted= (data ) => {
    // if (error || data) {
    //   reset();
    // console.log(progressRoute, '....pRoute');
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleProgressChangeCompleted, error, onLoad:isLoading, data, reset};
};

export default useProgressChangeCompleted;
