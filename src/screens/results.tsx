import React, { useContext, useState } from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from '../styles';
import HeaderGeneral from '../components/header';
import ResultList from '../components/resultList';
import InfoResults from '../components/infoResults';
import { convertAbbreviationCountry } from '../helpers';
import { DataStateContext } from '../context/stateContext';
import { FlightStatusCollection } from '../model/OrigenDestinoResponseTypes';
import { useResults } from './useResults';

const Results = ({route,navigation}: any) => {
  const { origin,state,estableceFav,removeFav } = useResults(route);

  return (
    <SafeAreaView style={styles.backGround}>
      <HeaderGeneral title={origin === 'flightNumber' ? `${state?.[0]?.segment?.operatingCarrier} ${state?.[0]?.segment?.operatingFlightCode}` : `${state?.[0]?.segment?.departureAirport} - ${state?.[0]?.segment?.arrivalAirport}` } subTitle='Tuesday, Nov 21' showBackBtn={true} navigation={navigation} origen='results'/>
      <InfoResults origin={`${convertAbbreviationCountry(state?.[0]?.segment?.departureAirport)} to ${convertAbbreviationCountry(state?.[0]?.segment?.arrivalAirport)}`} result={state?.length}/>
      <ResultList data={state} navigation={navigation} origin={origin} setFavorite={estableceFav} removeFavorite={removeFav}/>
    </SafeAreaView>
  );
};

export default Results;