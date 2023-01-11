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
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';





const ProjectsStatus = (props) => {
  const data = props?.route?.params?.proData
console.log(props?.route?.params?.proData, '...bdrop');
// const checkUsername = data => data.status === 'in-progress';
// console.log(data?.some(checkUsername), "...lcheck");

function newDataArr(arr){
const newArr = arr.filter((ar, index)=>(ar.status==="completed"))
console.log(newArr, '.....koal');

}

 const completed = newDataArr(data||[])

// function add(arr, name) {
//   const { length } = arr;
//   const id = length + 1;
//   const found = arr.some(el => el.status === name);
//   if (!found) arr.push({ id, username: name });
//   return arr;
// }

  const FirstRoute = () => (
   <View>
    <FlatList
    vertical
    showsHorizontalScrollIndicator={true}
    // ListEmptyComponent={myListEmpty}
    data={data||[]}
    // extraData={sideColors}
    keyExtractor={item => item.id}
    renderItem={({ item, index }) => (
        <View
            key={index}
        >
          {
            item.status==="in-progress" &&
            <ProjectCard
            title={item?.name}
            sProg={item?.status}
            hideTodo={true}
            caption={item?.description}
            others={true}
            style={styles.CardProjetcs}
            progressLoader={progress}
            progress={item?.progress}
            projId={item?._id}
            icon={true}
            date={`${new Date(item?.date?.start).toDateString()} - ${new Date(item?.date?.finish).toDateString()}`}

            // getProj={handleGetProjects}


        />
        // :<Text style={{
        //   fontFamily:appFonts.regularText.fontFamily,
        //   padding:scale(10)
        // }}> You have no Ongoing project</Text>


          }
          
        </View>

    )}
/>
</View>

  );
  
  const SecondRoute = () => (
    <View>
    <FlatList
    vertical
    showsHorizontalScrollIndicator={true}
    // ListEmptyComponent={myListEmpty}
    data={data}
    // extraData={sideColors}
    keyExtractor={item => item.id}
    renderItem={({ item, index }) => (
        <View
            key={index}
        >
           {
            item.status==="todo" &&
            <ProjectCard
                title={item?.name}
                sProg={item?.status}
                hideTodo={true}
                caption={item?.description}
                others={true}
                style={styles.CardProjetcs}
                progressLoader={progress}
                progress={item?.progress}
                projId={item?._id}
                icon={true}
                date={`${new Date(item?.date?.start).toDateString()} - ${new Date(item?.date?.finish).toDateString()}`}

                // getProj={handleGetProjects}


            />
            // :<Text style={{
            //   fontFamily:appFonts.regularText.fontFamily,
            //   padding:scale(10)
            // }}> You have no project here</Text>
           }
        </View>

    )}
/>
</View>
  );
  
  
  const ThirdRoute = () => (
    <View>
    <FlatList
    vertical
    showsHorizontalScrollIndicator={true}
    // ListEmptyComponent={myListEmpty}
    data={data}
    // extraData={sideColors}
    keyExtractor={item => item.id}
    renderItem={({ item, index }) => (
        <View
            key={index}
        >
            {
            item.status==="completed" &&
            <ProjectCard
                title={item?.name}
                sProg={item?.status}
                hideTodo={true}
                caption={item?.description}
                others={true}
                style={styles.CardProjetcs}
                progressLoader={progress}
                progress={item?.progress}
                projId={item?._id}
                icon={true}
                date={`${new Date(item?.date?.start).toDateString()} - ${new Date(item?.date?.finish).toDateString()}`}

                // getProj={handleGetProjects}


            />
            // :<Text style={{
            //   fontFamily:appFonts.regularText.fontFamily,
            //   padding:scale(10)
            // }}> You have no completed project</Text>
    }
        </View>

    )}
/>
</View>
  );
  const renderScene = SceneMap({
    first: FirstRoute,
    second: SecondRoute,
    third: ThirdRoute
  });
  

  const [index, setIndex] = useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Ongoing' },
    { key: 'second', title: 'Not Started' },
    { key: 'third', title: 'Completed' },

  ]);

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


const renderTabBar = props => (


  <TabBar
    tabStyle={styles.tabStyle}
    scrollEnabled={true}
    labelStyle={{ color: colors.black, fontSize: scale(10) }}
    {...props}
    indicatorStyle={{ backgroundColor: colors.primary, height: scale(3) }}
    style={{ backgroundColor: colors.background2, borderColor: 'transparent', color: colors.black }}
  />


);
return(

    <View style={styles.container}>
      <View style={{ paddingHorizontal: scale(20) }}>
        <Header
          leftIcon={'BackArrow'}
          onLeftIconPress={() => navigation.goBack()}
          title={'Career'}
          rightIcon={'Notification'}
          iconColor={colors.white}
        />

        <View style={styles.culve}>
        </View>
      </View>
      <View style={styles.layout}>
        {/* <VerticalScroll bgColor={colors.background2}> */}
          {/* <View style={{}}> */}
            <SearchInput />
            {/* <MapList /> */}

         

            <TabView
      navigationState={{ index, routes }}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={{ width: 150 }}
      renderTabBar={renderTabBar}

    />



        {/* <ProjectCard
         title="Define the Problem"
        others={true}
         style={styles.statusCard}
         progressLoader={progress}
         percentage={true}

        
        /> */}


          {/* </View> */}
        {/* </VerticalScroll> */}
      </View>
    </View>
)
}

export default ProjectsStatus;