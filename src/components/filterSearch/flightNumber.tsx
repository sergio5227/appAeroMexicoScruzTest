import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {styles} from '../../styles';
import {filterSearchStyle} from './style';

const FlightNumber = () => {
  const action = () => {};

  return (
    <View style={filterSearchStyle.btnModeSearchContainer}>
      <View>
        <TouchableOpacity onPress={() => action()}>
          <View style={filterSearchStyle.botonBack}>
            <Text style={filterSearchStyle.botonTextoPrimary}>
              {'Flight number'}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text
                style={{...filterSearchStyle.botonTexto, ...{color: 'rgba(0, 0, 0, 0.3)', marginRight:5}}}>
                AM
              </Text>
              <Text style={filterSearchStyle.botonTexto}>500</Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => action()}>
          <View style={filterSearchStyle.botonBack}>
            <Text style={filterSearchStyle.botonTextoPrimary}>
              {'Date of departure'}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text style={{...filterSearchStyle.botonTexto, ...{flex: 1}}}>
                {'Tuesday, Nov 21'}
              </Text>
              <Text style={{...filterSearchStyle.botonTexto, ...{}}}>
                <Icon name="calendar-outline" size={16} color="black" />
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FlightNumber;
