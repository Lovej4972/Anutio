import axios from 'axios';
import {
  API_SIGNUP,
  API_LOGIN,
  API_CHANGE_PASSWORD,
  API_VERIFY_ACCOUNT_RESEND,
  API_VERIFY_ACCOUNT,
  API_RESET_PASSWORD,
  API_FORGOT_PASSWORD,
  API_VERIFY_PASSWORD,
  API_PROFILE,
  API_UPDATE_PROFILE,
  API_CAPTURE_ACHIEVEMENT,
  API_INDUCTRY_TAGS,
  API_SUMMARY,
  API_CREATE_GOAL,
  API_GET_GOAL,
  API_CREATE_PROJECTS,
  API_GET_PROJECTS,
  API_GET_POINTS_HISTORY,
  API_GET_SKILLS_MATCHED,
  API_FINAL_CAPTURE,
  API_GET_ALL_ACHIEVEMENTS,
  API_GET_SINGLE_ACHIEVEMENTS,
  API_PROGRESS_IN_PROGRESS,
  API_PROGRESS_COMPLETED,
  API_DELETE_PROJETCS
  //API_EDIT_BIO 
} from '../constants/apiEndpoints';

import asyncStorageService from './asyncStorageService';
import ToastMessage from '../components/shared/ToastMessage';

const axiosHelper = axios.create({
  baseURL: 'https://anutio-server.herokuapp.com/api/v1/',
});
const axiosHelperCapture = axios.create({
  baseURL: 'https://skills-extraction-endpoint.herokuapp.com/',
});
const axiosHelperIndustryTags = axios.create({
  baseURL: 'https://anutioindustrytagendpoint.herokuapp.com/',
});
const axiosHelperSummary = axios.create({
  baseURL: 'https://anutiotextsummaryendpoint.herokuapp.com/',
});

const apiHelper = async (func, mute) => {


  try {
    const {data} = await func;
if(data?.data){
  console.log("datal", data);
(!mute &&
  

  ToastMessage({type:"success", message:data?.message||data?.data[0], autoHide:true})
  )

  return data?.data;
}
else{
ToastMessage({type:"success", message:data?.message,autoHide:true})

  return data

}
   
  } catch (error) {

    if (error.toJSON() && !error.toJSON().status) {
ToastMessage({type:"error", message:"Network Error, Please check your internet connection", autoHide:true})

      throw 'Network error!';
    } else if (
      error.response.data.error &&
      typeof error.response.data.error !== 'string'
    ) {
ToastMessage({type:"error", message:error.response.data.error[error.response.data.error.length - 1],  autoHide:true})

      throw error.response.data.error[error.response.data.error.length - 1];
    } else if (error.response) {
ToastMessage({type:"error", message:'error',  autoHide:true})
      throw error.response.data.message;
    } else if (error.request) {
      throw 'Request not processed!';
    } else {
      
      throw error.message;

    }
  }
};

class ApiService {
  async signup(dataObj) {
    return apiHelper(axiosHelper.post(API_SIGNUP, {...dataObj}));
  }

  async login(dataObj) {
    return apiHelper(axiosHelper.post(API_LOGIN, {...dataObj}));
  }

  async verifyAccount(dataObj) {
    return apiHelper(
      axiosHelper.patch(
        API_VERIFY_ACCOUNT,
        {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
  }

  async resendVerification() {
    return apiHelper(
      axiosHelper.get(
        API_VERIFY_ACCOUNT_RESEND,
        {},
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
  }

  async forgotPassword(dataObj) {
    return apiHelper(axiosHelper.post(API_FORGOT_PASSWORD, {...dataObj}));
  }

  async verifyCode(dataObj) {
    return apiHelper(axiosHelper.patch(API_VERIFY_PASSWORD, {...dataObj}));
  }

  async resetPassword(dataObj) {
    return apiHelper(axiosHelper.patch(API_RESET_PASSWORD, {...dataObj}));
  }

  async getUserProfile() {
    return apiHelper(
      axiosHelper.get(API_PROFILE, {headers: await getAuthorizationHeader()}),
      muteNotification = true
    );
  }

  async profileUpdate(dataObj, userId) {
    return apiHelper(
      axiosHelper.patch(
        API_UPDATE_PROFILE,
        {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
  }
  async createGoal(dataObj, userId) {
    return apiHelper(
      axiosHelper.post(
        API_CREATE_GOAL,
        {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
  }


  async getGoal(dataObj, userId) {
    console.log(await getAuthorizationHeader(), '...hotoken');
    return apiHelper(
      axiosHelper.get(
        API_GET_GOAL,
        // {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),

      muteNotification = true

    );
  }

  async createProjetcs(dataObj, userId) {
    return apiHelper(
      axiosHelper.post(
        API_CREATE_PROJECTS,
        {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
  }

  async getProjects(dataObj, userId) {
    // console.log(await getAuthorizationHeader(), '...hotoken');
    return apiHelper(
      axiosHelper.get(
        API_GET_PROJECTS,
        // {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),

      muteNotification = true

    );
  }
  async getPointHistory(dataObj, userId) {
    // console.log(await getAuthorizationHeader(), '...hotoken');
    return apiHelper(
      axiosHelper.get(
        API_GET_POINTS_HISTORY,
        // {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),

      muteNotification = true

    );
  }

  async getSkillsMatched(dataObj, userId) {
    // console.log(await getAuthorizationHeader(), '...hotoken');
    return apiHelper(
      axiosHelper.get(
        API_GET_SKILLS_MATCHED,
        // {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),

      muteNotification = true

    );
  }
  
  // async editBio(dataObj, userId) {
  //   return apiHelper(
  //     axiosHelper.post(
  //       API_EDIT_BIO,
  //       {...dataObj},
  //       {
  //         headers: await getAuthorizationHeader(),
  //       },
  //     ),
  //   );
  // }
  
  async finalCaptureAchievement(dataObj){
    return apiHelper(
      axiosHelper.post(
        API_FINAL_CAPTURE,
        {...dataObj}, 
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
    
  }
  async getAllAchievements(dataObj, userId) {
    // console.log(await getAuthorizationHeader(), '...hotoken');
    return apiHelper(
      axiosHelper.get(
        API_GET_ALL_ACHIEVEMENTS,
        // {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),

      muteNotification = true

    );
  }

  async getSingleAchievements(captureId) {
    // console.log(await getAuthorizationHeader(), '...hotoken');
    return apiHelper(
      axiosHelper.get(
        API_GET_SINGLE_ACHIEVEMENTS + captureId ,
        // {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),

      muteNotification = true

    );
  }

  async deleteProject(proId) {
    // console.log(await getAuthorizationHeader(), '...hotoken');
    return apiHelper(
      axiosHelper.delete(
        API_DELETE_PROJETCS + proId ,
        // {...dataObj},
        {
          headers: await getAuthorizationHeader(),
        },
      ),

      muteNotification = true

    );
  }

  async progressChange(dataObj, progressRoute){
    return apiHelper(
      axiosHelper.patch(
        API_PROGRESS_IN_PROGRESS,
        {...dataObj}, 
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
    
  }
  async progressChangeCompleted(dataObj, progressRoute){
    return apiHelper(
      axiosHelper.patch(
        API_PROGRESS_COMPLETED,
        {...dataObj}, 
        {
          headers: await getAuthorizationHeader(),
        },
      ),
    );
    
  }

async captureAchievement(dataObj){
  return apiHelper(
    axiosHelperCapture.post(
      API_CAPTURE_ACHIEVEMENT,
      {...dataObj}, 
  
    ),
  );
  
}

async industryTags(dataObj){
  return apiHelper(
    axiosHelperIndustryTags.post(
      API_INDUCTRY_TAGS,
      {...dataObj}, 
  
    ),
  );
  
}

async getSummary(dataObj){
  return apiHelper(
    axiosHelperSummary.post(
      API_SUMMARY,
      {...dataObj}, 
  
    ),
  );
  
}

}



export default new ApiService();

const getAuthorizationHeader = async () => {
  const token = await asyncStorageService.getToken();
  return {Authorization: `Bearer ${token}`};
};
