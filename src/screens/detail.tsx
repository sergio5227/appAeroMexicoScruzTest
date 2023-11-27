import React from 'react';
import {
  ImageBackground,
  SafeAreaView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from '../styles';
import BackBtnNavigation from '../components/btnNavigation/backBtnNavigation';
import {FlightStatusCollection} from '../model/NumerodeVueloResponseTypes';
import InfoFllightTime from '../components/infoFllightTime';
import InfoDetailFlight from '../components/infoDetailFlight';

const Details = ({route, navigation}: any) => {
  const params = route.params;
  const item:FlightStatusCollection = params?.item || ``;
  const origin: 'flightNumber' | 'destination' = params?.origin || ``;
  const backScreen = () => {
    navigation.navigate('ScreenResults', {origen: origin});
  };
  return (
    <SafeAreaView style={{...styles.backGround, ...{}}}>
      <View style={{flex: 0.5}}>
        <ImageBackground
          source={require('./fondo.png')}
          resizeMode="cover"
          style={{flex: 1, position: 'relative', bottom: -15}}>
          <View style={{padding: 20}}>
            <BackBtnNavigation accion={backScreen} />
          </View>
        </ImageBackground>
      </View>
      <InfoDetailFlight item={item} />
    </SafeAreaView>
  );
};

export default Details;
