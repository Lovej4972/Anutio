import React from 'react';
import Email from '../../assets/svg/EmailSvg';
import EyeClose from '../../assets/svg/EyeClose';
import EyeOpen from '../../assets/svg/EyeOpen';
import Google from '../../assets/svg/Google';
import LinkedIn from '../../assets/svg/LinkedIn';
import User from '../../assets/svg/UserSvg';
import Phone from '../../assets/svg/PhoneSvg';
import Home from '../../assets/svg/HomeSvg';
import Network from '../../assets/svg/NetworkSvg';
import Capture from '../../assets/svg/CaptureSvg';
import Goals from '../../assets/svg/GoalSvg';
import Timelines from '../../assets/svg/TimelinSvg';
import BackArrow from '../../assets/svg/BackArrowSvg';
import Notification from '../../assets/svg/NotificationSvg';
import Location from '../../assets/svg/LocationSvg';
import Next from '../../assets/svg/NextSvg';
import Logout from '../../assets/svg/LogoutSvg';
import InfoSvg from '../../assets/svg/InfoSvg'
import VoiceSvg from '../../assets/svg/VoiceSvg';
import ProfileStar from '../../assets/svg/ProfileStar';
import CareerMap from '../../assets/svg/careerMap';
import GoalIcon from '../../assets/svg/goalsIcon';
import getHelp from '../../assets/svg/getHelp';
import ProjectsIcon from '../../assets/svg/projects';
import YourCirle from '../../assets/svg/YourCircle';
import ArrowDown from '../../assets/svg/ArrowDown';
import SearchIcon from '../../assets/svg/Search';
import SearchFilter from '../../assets/svg/Filter';

import ProjIcon from '../../assets/svg/ProjIcon';
import JobIcon from '../../assets/svg/JobIcon';
import EduIcon from '../../assets/svg/EduIcon';
import CareerSkiilMapIcon from '../../assets/svg/CareerSkillMap';
import More from '../../assets/svg/more';
import ArrowUp from '../../assets/svg/ArrowUp';
import AddFriend from '../../assets/svg/AddFriend'
import LogoutIcon from '../../assets/svg/LogoutSvg';
import Setting from '../../assets/svg/Setting';
import NetworkMap from '../../assets/svg/NetworkMap';
import About from '../../assets/svg/About';
import Clock from '../../assets/svg/Clock';
import Award from '../../assets/svg/Award';
import Add from '../../assets/svg/add';
import Trash from '../../assets/svg/Trash';
import CalenderSvg from '../../assets/svg/Calendar';
import getMatched from '../../assets/svg/getMatched';
import JobCardIcon from '../../assets/svg/JobCardIcon';
import Edit from '../../assets/svg/edit';
import Edit2 from '../../assets/svg/edit2';
import AddCircle from '../../assets/svg/addCircle';
import Close from '../../assets/svg/close';
import UntickSquare from '../../assets/svg/UntickSquare';
import TickSquare from '../../assets/svg/TickSquare';

import Dot from '../../assets/svg/dot';
const components = {
  TickSquare,
  UntickSquare,
  Close,
  Home,
  Network,
  Capture,
  Goals,
  Notification,
  Timelines,
  Location,
  BackArrow,
  Next,
  Logout,
  Email,
  EyeClose,
  EyeOpen,
  Google,
  LinkedIn,
  User,
  Phone,
  InfoSvg,
  VoiceSvg,
  ProfileStar,
  CareerMap,
  GoalIcon,
  getHelp,
  ProjectsIcon,
  YourCirle,
ArrowDown,
SearchIcon,
SearchFilter,
ProjIcon,
JobIcon,
CareerSkiilMapIcon,
EduIcon,
More,
ArrowUp,
AddFriend,
LogoutIcon,
Setting,
NetworkMap,
About,
Clock,
Award,
Add,
Trash,
CalenderSvg,
getMatched,
JobCardIcon,
Edit,
Edit2,
Dot,
AddCircle


};

const IconGenerator = ({tagName, ...props}) => {
  const TagName = components[tagName];

  if (TagName) {
    return <TagName {...props} />;
  } else {
    return null;
  }
};

export default IconGenerator;
