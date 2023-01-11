import React from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import Header from '../../components/shared/HeaderNav/Header';
import HeaderAvatar from '../../components/shared/HeaderNav/HeaderAvatar';
import VerticalScroll from '../shared/scroll/VerticalScroll';
import Ellipse from '../../assets/images/Ellipse.png';
import { URL_TAB } from '../../constants/navigations';
import Button from '../shared/Button';
import colors from '../../constants/colors';
import { appFonts, scale, scaleVertical } from '../../constants/scale';
import { useNavigation } from '@react-navigation/native';
import Banner from '../shared/Banner'
import skillMapBanner from '../../assets/images/skillMapBanner.png'

// import ProfileForm from './component/ProfileForm';
import styles from './styles';
import UploadInput from '../shared/UploadInput/uploadInput';
import Input from '../shared/Input';
import SearchInput from '../shared/SearchInput/searchInput';
import IconGenerator from '../shared/IconGenerator';

const CSMapCard = () => {
    const navigation = useNavigation();


    return (
        <View>

            <View style={styles.cardDesign}>
                <View >

                    <View style={styles.headerTitle}>
                        <Text style={styles.cardTitle}>Project management  </Text>

                        <Text style={[styles.cardStatus, { color: colors.error }]} >Achieved</Text>

                    </View>

                    <View style={styles.body1}>

                        <Text style={styles.body1Title}>Project:</Text>


                        <View>
                            <Text style={styles.body1Body}>Product management</Text>

                        </View>

                    </View>

                </View>

                <View style={styles.section1}>

                </View>

                <View style={styles.section2}>
                    <View style={styles.headerTitle}>
                        <Text style={styles.cardTitle}>Summary  </Text>


                    </View>

                    <View style={styles.body1}>
                        <View>
                            <Text style={styles.body1Body}>
                                On these project I was required to monitor and
                                ensure deliveries are on track.
                            </Text>

                        </View>

                        <View style={styles.moreIcon}>
                            <IconGenerator tagName={"More"} />


                        </View>

                    </View>


                </View>




            </View>

        </View>
    )

}

export default CSMapCard;