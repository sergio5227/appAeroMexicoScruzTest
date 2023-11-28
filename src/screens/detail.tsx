import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  ScrollView,
  View,
} from 'react-native';
import {styles} from '../styles';
import BackBtnNavigation from '../components/btnNavigation/backBtnNavigation';
import InfoDetailFlight from '../components/infoDetailFlight';
import { FlightStatusCollection } from '../model/OrigenDestinoResponseTypes';
import { useDetail } from './useDetail';

const Details = ({route, navigation}: any) => {
  const { backScreen,item } = useDetail(route, navigation);
  return (
    <SafeAreaView style={styles.backGround}>
      <View style={{flex: 1}}>
        <ImageBackground
          source={require('../assets/fondo.png')}
          resizeMode="cover"
          style={styles.imgBackgrund}>
          <View style={styles.generalPadding}>
            <BackBtnNavigation accion={backScreen} />
          </View>
        </ImageBackground>
      </View>
      <ScrollView style={{flex: 1}}>
        <InfoDetailFlight item={item} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Details;
