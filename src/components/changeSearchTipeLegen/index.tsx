import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import { changeSearchTipeLegenStyle } from '../../styles';

interface ChangeSearchTipeLegenProps {
  searchType: 'flightNumber' | 'destination';
  changeTypeSearch: (searchType: 'flightNumber' | 'destination') => void;
}

const ChangeSearchTipeLegen = (props: ChangeSearchTipeLegenProps) => {

  const {searchType, changeTypeSearch} = props;
  
  return (
    <View>
      <View style={{padding: 20}}>
        <Text
          style={changeSearchTipeLegenStyle.textFirst}>
          {searchType === 'flightNumber'
            ? 'Can’t find your flight number?'
            : 'Looking for a specific flight?'}{' '}
        </Text>
        <View
          style={changeSearchTipeLegenStyle.viewTry}>
          <Text
            style={changeSearchTipeLegenStyle.textSecond}>
            Try searching by{' '}
          </Text>
          <TouchableOpacity
            onPress={() =>
              changeTypeSearch(
                searchType === 'flightNumber' ? 'destination' : 'flightNumber',
              )
            }>
            <View>
              <Text
                style={changeSearchTipeLegenStyle.textThird}>
                {searchType === 'flightNumber'
                  ? 'destination'
                  : 'flight number'}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default ChangeSearchTipeLegen;
