import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS, URL_GOALS, URL_PROJECTS} from '../../constants/navigations';
import { useState } from 'react';

const useProgressChange = (progressRoute) => {
  const [goalSuccess, setGoalSuccess] = useState(false)
  const navigation = useNavigation();
  const mutation = useMutation((data) => apiService.progressChange(data, progressRoute), {
    
    onSuccess: async (inProgress) => {
      console.log(inProgress," ...projetsInProgress");

   
      navigation.navigate(URL_PROJECTS );
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleProgressChange= (data,progressRoute ) => {
    // if (error || data) {
    //   reset();
    console.log(progressRoute, '....pRoute');
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleProgressChange, error, isLoading, data, reset};
};

export default useProgressChange;
