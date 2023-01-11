import {useMutation} from 'react-query';
import apiService from '../../services/apiService';
import {useNavigation} from '@react-navigation/native';
import {URL_TAB, URL_SKILL_TAGS,URL_INDUSTRY_TAGS, URL_SUMAARY} from '../../constants/navigations';

const useIndustryTags = (summaryStrings) => {
console.log(summaryStrings, '...aindustrw');

  const navigation = useNavigation();



  const mutation = useMutation((user) => apiService.getSummary(user), {
    onSuccess: async (summaryData) => {
    //  let newData=  await nData
      console.log( summaryData, "success mm");
      // console.log('tags gotten', {newData, aData});
      navigation.navigate(URL_SUMAARY, {...summaryData, ...summaryStrings} );
    },
  });
  const {isLoading, error, data, reset} = mutation;
  
  const summaryDataTags = (data) => {
    // if (error || data) {
    //   reset();
    // }
  console.log(data, 'birdd');

    mutation.mutate(data);
  };

  return {summaryDataTags, error, isLoading, data, reset};
};



// const useCaptureAchievement = (dataObj) => {
//   const {data, error, isLoading} = useQuery('capture', () => apiService.captureAchievement(dataObj));
//   console.log('foo', data)
//   return {data, error, isLoading};
// };

// export default useGetResendAccount;
export default useIndustryTags;
