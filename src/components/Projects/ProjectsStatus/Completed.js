import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, Alert } from 'react-native';
import Header from '../../../components/shared/HeaderNav/Header';
import HeaderAvatar from '../../../components/shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../../shared/scroll/VerticalScroll'
import Ellipse from '../../../assets/images/Ellipse.png';
import { URL_TAB } from '../../constants/navigations';
import Button from '../../shared/Button';
import colors from '../../../constants/colors';
import { appFonts, scale, scaleVertical } from '../../../constants/scale';
import { useNavigation } from '@react-navigation/native';
import Banner from '../../shared/Banner'
import skillMapBanner from '../../../assets/images/skillMapBanner.png'

// import ProfileForm from './component/ProfileForm';
import styles from '../styles';
import UploadInput from '../../shared/UploadInput/uploadInput';
import Input from '../../shared/Input';
import SearchInput from '../../shared/SearchInput/searchInput';
import IconGenerator from '../../shared/IconGenerator';
import { color } from 'react-native-reanimated';
import ProjectCard from '../components/ProjectCard';
// import TopMatch from './TopMatchCard';

const Completed = () => {



   const navigation = useNavigation()


   const progress = [
    {
        id:1,
        title:'Gather resource materials',
        checked:true,
        color:colors.green,
        percentage:0.6
    },

    
]
return(

      
        <ProjectCard
         title="Define the Problem"
        others={true}
         style={styles.statusCard}
         progressLoader={progress}
         percentage={true}

        
        />


      
)
}

export default Completed;

