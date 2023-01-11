import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS,URL_INDUSTRY_TAGS} from '../../constants/navigations';

const useSkillsTags = (industryStrings) => {
  const navigation = useNavigation();
  const mutation = useMutation((user) => apiService.industryTags(user), {
    onSuccess: async (industryData) => {
    //  let newData=  await nData
      console.log( industryData, "success mm");
      // console.log('tags gotten', {newData, aData});
      navigation.navigate(URL_INDUSTRY_TAGS, {...industryData, industryStrings} );
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const handleSkillsTags = (data) => {
    // if (error || data) {
    //   reset();
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {handleSkillsTags, error, isLoading, data, reset};
};



// const useCaptureAchievement = (dataObj) => {
//   const {data, error, isLoading} = useQuery('capture', () => apiService.captureAchievement(dataObj));
//   console.log('foo', data)
//   return {data, error, isLoading};
// };

// export default useGetResendAccount;
export default useSkillsTags;
