import React, { useContext, useState } from 'react';
import {
  Button,
  SafeAreaView, Text
} from 'react-native';
import {styles} from '../styles';
import HeaderGeneral from '../components/header';
import { BtnModeSearch } from '../components/btnModeSearch';
import FlightNumber from '../components/filterSearch/flightNumber';
import Destination from '../components/filterSearch/destination';
import { getByDestination, getByNumber } from '../http';
import BtnSearch from '../components/btnSearch';
import ChangeSearchTipeLegen from '../components/changeSearchTipeLegen';
import { DataStateContext } from '../context/stateContext';
import { FlightStatusCollection } from '../model/OrigenDestinoResponseTypes';
import { useSearch } from './useSearch';

const Search = ({navigation}: any) => {
  const { setSearchType, searchType, search, changeTypeSearch } = useSearch(navigation);
  return (
    <SafeAreaView style={styles.backGround}>
      <HeaderGeneral title='Track your flight' subTitle='Keep you informed in real time!' showBackBtn={false} origen='search'/>
      <BtnModeSearch action={setSearchType} searchType={searchType} />
      {searchType ===  'flightNumber' ? <FlightNumber/> : <Destination/> }
      <BtnSearch search={search}/>
      <ChangeSearchTipeLegen searchType={searchType} changeTypeSearch={changeTypeSearch}/>
    </SafeAreaView>
  );
};

export default Search;