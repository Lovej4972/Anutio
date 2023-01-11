import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS, URL_GOALS, URL_PROJECTS} from '../../constants/navigations';
import { useState } from 'react';

const useCreateProjects = (goal) => {
  const [goalSuccess, setGoalSuccess] = useState(false)
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.createProjetcs(user), {
    
    onSuccess: async (goalDate) => {
      console.log("...projets data");
   
      navigation.navigate(URL_PROJECTS );
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleCreateProjects= (data) => {
    // if (error || data) {
    //   reset();
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleCreateProjects, error, isLoading, data, reset};
};

export default useCreateProjects;
