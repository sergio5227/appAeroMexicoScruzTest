import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from '../../styles';

interface BtnSearchProps {
  search: () => void;
}

const BtnSearch = (props: BtnSearchProps) => {
    
  return (
    <View style={styles.glbMargin}>
      <TouchableOpacity onPress={() => props?.search()}>
        <View
          style={{
            borderWidth: 1,
            height: 50,
            padding: 5,
            marginHorizontal: 5,
            backgroundColor: 'black',
            borderRadius: 5,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text
            style={{
              color: 'white',
              fontWeight: '600',
              lineHeight: 22,
              fontSize: 16,
            }}>
            {'Search Flights'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BtnSearch;
