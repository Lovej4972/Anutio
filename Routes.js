import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  URL_TAB,
  URL_LOGIN,
  URL_SIGN_UP,
  URL_FORGET_PASSWORD,
  URL_VERIFY_TOKEN,
  URL_VERIFY_ACCOUNT,
  URL_RESET_PASSWORD,
  URL_RESET_PASSWORD_SUCCESS,
  URL_HOME,
  URL_NETWORK_MAP,
  URL_CAPTURE,
  URL_GOALS,
  URL_TIME_LINES,
  URL_PROFILE,
  URL_PROFILE_COMPLETION,
  URL_VOICE_CAPTURE,
  URL_SKILL_TAGS,
  URL_INDUSTRY_TAGS,
  URL_CAREER_SKILL_MAP,
  URL_SKILL_SEE_ALL,
  URL_SKILL_CAREER_MATCH,
  URL_NEW_GOAL,
  URL_PROJECTS,
  URL_NEW_PROJECTS,
  URL_NEW_PROJECTS_STATUS,
  URL_SETTINGS,
  URL_PASSWORD_SETTINGS,
  URL_ADD_CARD,
  URL_ADD_CARD_DETAILS,
  URL_JOB,
  URL_SUMAARY, 
  URL_POINTS,
  URL_INTRO,
  URL_LOGO_ANIMATION,
  URL_ADD_EXISTING,
  URL_ALL_CAPTURE

} from './src/constants/navigations';
import IconGenerator from './src/components/shared/IconGenerator';
import colors from './src/constants/colors';
import {appFonts, scale, scaleVertical} from './src/constants/scale';
import LoginScreen from './src/screens/LoginScreen/LoginScreen';
import SignupScreen from './src/screens/SignupScreen/SignupScreen';
import ForgotPasswordScreen from './src/screens/ForgotPasswordScreen';
import ResetTokenScreen from './src/screens/ResetTokenScreen';
import SplashScreen from './src/screens/SplashScreen';
import ResetPasswordScreen from './src/screens/ResetPasswordScreen';
import ResetSuccessScreen from './src/screens/ResetSuccessScreen';
import AccountVerificationScreen from './src/screens/AccountVerificationScreen';
import HomeScreen from './src/screens//HomeScreen/HomeScreen';
import NetWorkMapScreen from './src/screens/NetWorkMapScreen/NetWorkMapScreen';
import CaptureScreen from './src/screens/CaptureScreen/CaptureScreen';
import GoalScreen from './src/screens/GoalScreen/GoalScreen';
import TimelineScreen from './src/screens/TimelineScreen/TimelineScreen';
import ProfileCompletion from './src/screens/ProfileScreen/ProfileCompletion';
import ProfileScreen from './src/screens/ProfileScreen/ProfileScreen';
import VoiceCaptureScreen from './src/screens/CaptureScreen/VoiceCaptureScreen';
import SkillTagsScreen from './src/screens/TagsScreen/SkillTagScreen';
import IndustryTagScreen from './src/screens/TagsScreen/IndustryTagScreen';
import CareerSkillMapScreen from './src/screens/SkillScreen/CareerSkillMapScreen';
import SeeAllSkillScreen from './src/screens/SkillScreen/SeeAllSkills';
import CareerMatch from './src/components/CareerMatch';
import NewGoalScreen from './src/screens/GoalScreen/NewGoalScreen';
import ProjectsScreen from './src/screens/ProjectScreen/ProjectScreen'
import Toast from 'react-native-toast-message'
import NewProjectsScreen from './src/screens/ProjectScreen/NewProject';
import ProjectStatusScreen from './src/screens/ProjectScreen/ProjectStatusScreen';
import SettingsScreen from './src/screens/SettingsScreen/SettingsScreen';
import PasswordSettingsScreen from './src/screens/SettingsScreen/PasswordSettingsScreen';
import AddCardScreen from './src/screens/SettingsScreen/AddCardScreen';
import AddCardDetailScreen from './src/screens/SettingsScreen/AddCardDetailScreen';
import JobScreen from './src/screens/Jobs/JobScreen';
import SummaryScreen from './src/screens/TagsScreen/SummaryScreen';
import PointScreen from './src/screens/PointScreen/PointScreen';
import IntroSliderScreen from './src/screens/IntroSliderScreen';
import LogoAnimationScreen from './src/screens/LogoAnimationScreen';
import AddCaptureToExistingScreen from './src/screens/CaptureScreen/AddCaptureToExistingScreen';
import AllCaptureScreen from './src/screens/CaptureScreen/AllCaptureScreen';


const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const Routes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen
          name={'Main'}
          component={AppStack}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
<Toast refs={(ref)=>{Toast.setRef(ref)}}/> 

    </NavigationContainer>
  );
};

export default Routes;

const TabStack = () => {
  return (
    <View style={{flex: 1, backgroundColor: colors.background2}}>
      <Tab.Navigator
        tabBar={props => <MyTabBar {...props} />}
        initialRouteName={URL_HOME}
        screenOptions={() => ({
          headerShown: false,
          tabBarBackground: colors.white,
          tabBarLabelStyle:{
            fontFamily:appFonts.regularText.fontFamily
          }
        })}
       

        
        
        >
        <Tab.Screen name={URL_HOME} component={HomeScreen} />
        {/* <Tab.Screen name={URL_NETWORK_MAP} component={NetWorkMapScreen} /> */}
        <Tab.Screen name={URL_CAPTURE} component={CaptureScreen} />
        <Tab.Screen name={URL_GOALS} component={GoalScreen} />
        {/* <Tab.Screen name={URL_TIME_LINES} component={TimelineScreen} /> */}
      </Tab.Navigator>
    </View>
  );
};

const MyTabBar = ({state, descriptors, navigation}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: colors.primary,
        paddingVertical: scaleVertical(2),
        marginHorizontal: scale(10),
        marginVertical: scale(10),
        borderRadius: scale(50),
      }}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: scale(0),
            }}>
            <View style={{paddingVertical: scaleVertical(5)}}>
              <IconGenerator
                tagName={label === URL_NETWORK_MAP ? 'Network' : label}
                color={isFocused ? colors.white : '#A09F9F'}
                height={scaleVertical(24)}
              />
            </View>
            <Text
              style={{
                color: isFocused ? colors.white : '#A09F9F',
                fontSize: scale(10),
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

const AppStack = () => {
  return (
    <Stack.Navigator
      initialRouteName={'splash'}
      screenOptions={() => ({
        headerShown: false,
      })}>
      <Stack.Screen name={'splash'} component={SplashScreen} />
      <Stack.Screen name={'intro'} component={IntroSliderScreen} />
      <Stack.Screen name={'logo-animate'} component={LogoAnimationScreen} />


      <Stack.Screen name={URL_LOGIN} component={LoginScreen} />
      <Stack.Screen name={URL_SIGN_UP} component={SignupScreen} />
      <Stack.Screen name={URL_TAB} component={TabStack} />
      <Stack.Screen
        name={URL_VERIFY_ACCOUNT}
        component={AccountVerificationScreen}
      />
      <Stack.Screen
        name={URL_FORGET_PASSWORD}
        component={ForgotPasswordScreen}
      />
      <Stack.Screen name={URL_VERIFY_TOKEN} component={ResetTokenScreen} />
      <Stack.Screen name={URL_RESET_PASSWORD} component={ResetPasswordScreen} />
      <Stack.Screen
        name={URL_RESET_PASSWORD_SUCCESS}
        component={ResetSuccessScreen}
      />
      <Stack.Screen
        name={URL_PROFILE_COMPLETION}
        component={ProfileCompletion}
      />
      <Stack.Screen name={URL_VOICE_CAPTURE} component={VoiceCaptureScreen} />
      <Stack.Screen name={URL_SKILL_TAGS} component={SkillTagsScreen} />
      <Stack.Screen name={URL_INDUSTRY_TAGS} component={IndustryTagScreen} />
      <Stack.Screen name={URL_CAREER_SKILL_MAP} component={CareerSkillMapScreen} />
      <Stack.Screen name={URL_SKILL_SEE_ALL} component={SeeAllSkillScreen} />
      <Stack.Screen name={URL_SKILL_CAREER_MATCH} component={CareerMatch} />
      <Stack.Screen name={URL_NEW_GOAL} component={NewGoalScreen} />
      <Stack.Screen name={URL_PROJECTS} component={ProjectsScreen} />
      <Stack.Screen name={URL_NEW_PROJECTS} component={NewProjectsScreen} />
      <Stack.Screen name={URL_NEW_PROJECTS_STATUS} component={ProjectStatusScreen} />
      <Stack.Screen name={URL_SETTINGS} component={SettingsScreen} />
      <Stack.Screen name={URL_PASSWORD_SETTINGS} component={PasswordSettingsScreen} />
      <Stack.Screen name={URL_ADD_CARD} component={AddCardScreen} />
      <Stack.Screen name={URL_ADD_CARD_DETAILS} component={AddCardDetailScreen} />
      <Stack.Screen name={URL_JOB} component={JobScreen} />
      <Stack.Screen name={URL_SUMAARY} component={SummaryScreen} />
      <Stack.Screen name={URL_POINTS} component={PointScreen} />
      <Stack.Screen name={URL_ADD_EXISTING} component={AddCaptureToExistingScreen} />
      <Stack.Screen name={URL_ALL_CAPTURE} component={AllCaptureScreen} />
      <Stack.Screen name={URL_PROFILE} component={ProfileScreen} />
    </Stack.Navigator>
  );
};
