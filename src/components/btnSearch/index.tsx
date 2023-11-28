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
          style={styles.btnSearchContent}>
          <Text
            style={styles.btnSearchText}>
            {'Search Flights'}
          </Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default BtnSearch;
