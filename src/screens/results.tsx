import React, { useContext } from 'react';
import {SafeAreaView, Text, View} from 'react-native';
import {styles} from '../styles';
import HeaderGeneral from '../components/header';
import ResultList from '../components/resultList';
import InfoResults from '../components/infoResults';
import { convertAbbreviationCountry } from '../helpers';
import { DataStateContext } from '../context/stateContext';
import { FlightStatusCollection } from '../model/NumerodeVueloResponseTypes';

const Results = ({route,navigation}: any) => {
  const { state,favs,setFavs,set, removeFavs } = useContext(DataStateContext);
  const params = route.params;
  const origin:'flightNumber'| 'destination' = params?.origen || ``;

  const estableceFav = (item:FlightStatusCollection)=> {
    const newState:FlightStatusCollection[] = Object.assign([],state);
    const dataFilter = newState.filter(e=> e?.id !== item?.id );
    set(dataFilter);
    setFavs(item);
  }

  const removeFav = (item:FlightStatusCollection)=> {
    const newStatef:FlightStatusCollection[] = Object.assign([],favs);
    const dataFilter = newStatef.filter(e=> e?.id !== item?.id );
    removeFavs(dataFilter);
    const newState:FlightStatusCollection[] = Object.assign([],state);
    newState.push(item)
    set(newState)
  }

  return (
    <SafeAreaView style={styles.backGround}>
      <HeaderGeneral title={origin === 'flightNumber' ? `${state?.[0]?.segment?.operatingCarrier} ${state?.[0]?.segment?.operatingFlightCode}` : `${state?.[0]?.segment?.departureAirport} - ${state?.[0]?.segment?.arrivalAirport}` } subTitle='Tuesday, Nov 21' showBackBtn={true} navigation={navigation} origen='results'/>
      <InfoResults origin={`${convertAbbreviationCountry(state?.[0]?.segment?.departureAirport)} to ${convertAbbreviationCountry(state?.[0]?.segment?.arrivalAirport)}`} result={state?.length+favs?.length}/>
        {favs?.length ? <View style={{
        height:240, borderWidth:.5,borderColor:'#CCCCCC', paddingVertical:10}}>
          
        <Text style={{fontSize:14,fontWeight:'bold', color:'black', textAlign:'center', paddingTop:5 }}>favorites {(`${favs?.length}`)}</Text>
        
        <ResultList data={favs} navigation={navigation} origin={origin} favs removeFavorite={removeFav}/>  
        
      </View> : null}
      <ResultList data={state} navigation={navigation} origin={origin} setFavorite={estableceFav} />
    </SafeAreaView>
  );
};

export default Results;