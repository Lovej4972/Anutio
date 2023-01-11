import AsyncStorage from '@react-native-async-storage/async-storage';

class AsyncStorageService {
  async getToken() {
    try {
      return await AsyncStorage.getItem('@token');
    } catch (e) {
      console.log(e);
    }
  }

  async setToken(token) {
    try {
      return await AsyncStorage.setItem('@token', token);
    } catch (e) {
      console.log(e);
    }
  }

  async removeToken() {
    try {
      return await AsyncStorage.removeItem('@token');
    } catch (e) {
      console.log(e);
    }
  }

  async setCapture(capture){
    let ncapture = JSON.stringify(capture)
    console.log(ncapture, "ncapture");
    try {
      return await AsyncStorage.setItem('@capture', ncapture);
    } catch (e) {
      console.log(e);
    }
  }
  
  async getCapture(){
    try {
      return await AsyncStorage.getItem('@capture');
    } catch (e) {
      console.log(e);
    }
  }



  async setSkillsTg(SkillsTg){
    let nSkills = JSON.stringify(SkillsTg)
    console.log(nSkills, "ncapture");
    try {
      return await AsyncStorage.setItem('@SkillsTg', nSkills);
    } catch (e) {
      console.log(e);
    }
  }

  async getSkillsTg(){
    try {
      return await AsyncStorage.getItem('@SkillsTg');
    } catch (e) {
      console.log(e);
    }
  }

  async setIndustryTags(iTags){
    let nIndustry = JSON.stringify(iTags)
    console.log(nIndustry, "ncapture");
    try {
      return await AsyncStorage.setItem('@iTags', nIndustry);
    } catch (e) {
      console.log(e);
    }
  }
  async getIndustryTags(iTags){
    try {
      return await AsyncStorage.getItem('@iTags');
    } catch (e) {
      console.log(e);
    }
  }

  


  
}

export default new AsyncStorageService();
