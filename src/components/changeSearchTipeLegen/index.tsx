import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';

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
          style={{
            textAlign: 'center',
            color: 'rgba(0, 0, 0, 0.5)',
            fontWeight: '600',
            lineHeight: 22,
          }}>
          {searchType === 'flightNumber'
            ? 'Can’t find your flight number?'
            : 'Looking for a specific flight?'}{' '}
        </Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.5)',
              fontSize: 16,
              fontWeight: '400',
              textAlign: 'center',
              lineHeight: 22,
            }}>
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
                style={{
                  color: 'rgba(0, 0, 0, 0.5)',
                  fontSize: 16,
                  fontWeight: '400',
                  textAlign: 'center',
                  lineHeight: 22,
                  textDecorationLine: 'underline',
                }}>
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
