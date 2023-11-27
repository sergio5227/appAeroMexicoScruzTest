import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';
import { styles } from '../../styles';
import { filterSearchStyle } from './style';

const Destination = () => {

  const action = ()=> {

  }

  return (
    <View>
      <View style={filterSearchStyle.btnModeSearchContainer}>
      <View style={{flex: 1}}>
        <TouchableOpacity onPress={() => action()}>
          <View style={filterSearchStyle.botonBack}>
            <Text style={filterSearchStyle.botonTextoPrimary}>
              {'Origin'}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text 
              style={{...filterSearchStyle.botonTexto, ...{marginRight:10}}}>
                Mexico City</Text>
              <Text
                style={{...filterSearchStyle.botonTexto, ...{color: 'rgba(0, 0, 0, 0.3)'}}}>
                MEX
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      <View style={{flex: 1}}>
      <TouchableOpacity onPress={() => action()}>
          <View style={filterSearchStyle.botonBack}>
            <Text style={filterSearchStyle.botonTextoPrimary}>
              {'Destination'}
            </Text>
            <View style={{flex: 1, flexDirection: 'row'}}>
              <Text 
              style={{...filterSearchStyle.botonTexto, ...{marginRight:10}}}>
                Cancún</Text>
              <Text
                style={{...filterSearchStyle.botonTexto, ...{color: 'rgba(0, 0, 0, 0.3)'}}}>
                CUN
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
      </View>
      <View style={{
        paddingHorizontal:20,
        paddingBottom:20
      }}>
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
  )
}

export default Destination;