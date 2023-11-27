import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import InfoFllightTime from '../infoFllightTime';
import { FlightStatusCollection } from '../../model/NumerodeVueloResponseTypes';
import { capitalizeFirstLetter, formatDate, geTimeFromDate, toHoursAndMinutes } from '../../helpers';
import { styles } from '../../styles';

interface InfoDetailFlightProps {
    item:FlightStatusCollection
}

const InfoDetailFlight = (props:InfoDetailFlightProps) => {
    const {item} = props;
  return (
    <View
    style={{
      flex: 1,
      backgroundColor: 'white',
      borderTopRightRadius: 25,
      borderTopLeftRadius: 25,
      borderBottomRightRadius: 0,
      borderBottomLeftRadius: 0,
    }}>
    <View style={{height: 60, flexDirection: 'row',borderBottomWidth:.5, borderBottomColor:'rgba(0, 0, 0, 0.3)'}}>
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={{
              color: 'rgba(0, 0, 0, 0.3)',
              paddingLeft: 20,
              fontSize: 24,
              fontWeight: '600',
            }}>
            {item?.segment?.operatingCarrier}{' '}
          </Text>
          <Text style={{color: 'black', fontSize: 24, fontWeight: '600'}}>
          {item?.segment?.operatingFlightCode}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
              paddingLeft: 20,
            }}>
              {formatDate(item?.outGate?.dateTimeLocal)}
          </Text>
        </View>
      </View>

      <View style={{flex: 1, justifyContent:'center', alignItems:'flex-end', paddingRight:20}}>
        <TouchableOpacity>
          <View
            style={{...{
              height: 28,
              width:56, 
              padding: 5,
              marginHorizontal: 5,
              backgroundColor: 'black',
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }, ...styles?.[item?.status]}}>
            <Text
              style={{
                color: 'white',
                fontWeight: '600',
                lineHeight: 20,
                fontSize: 12,
              }}>
              {capitalizeFirstLetter(item?.status)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <View style={{borderBottomWidth:.5, borderBottomColor:'rgba(0, 0, 0, 0.3)', marginHorizontal:20}}>
    <InfoFllightTime item={item} />
    </View>
    <View style={{flex:1, padding:20}}>
            <View>
              <Text style={{color:'black', fontSize:18, lineHeight:24, fontWeight:'600'}}>Flight details</Text>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'black',flex:1,  fontSize:14, lineHeight:20, fontWeight:'600'}}>Departure</Text>
              <Text style={{color:'rgba(0, 0, 0, 0.5)',flex:1, fontSize:12, lineHeight:20, fontWeight:'400', textAlign:'right'}}>{item?.segment?.departureAirport} - {item?.boardingTerminal}</Text>
            </View>
            <View style={{flexDirection:'row', height:50, backgroundColor:'rgba(247, 247, 247, 1)'}}>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12,color:'black', fontWeight:'400'}}>Terminal</Text>
                <Text style={{fontSize:14,color:'black', fontWeight:'bold'}}>{item?.boardingTerminal}</Text>
              </View>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12,color:'black', fontWeight:'400'}}>Gate</Text>
                <Text style={{fontSize:14,color:'black', fontWeight:'bold'}}>{item?.boardingGate}</Text>
              </View>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12,color:'black', fontWeight:'400'}}>Boarding</Text>
                <Text style={{fontSize:14,color:'black', fontWeight:'bold'}}>{item?.boardingTime}</Text>
              </View>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}></View>
            </View>
            <View style={{flexDirection:'row'}}>
              <Text style={{color:'black',flex:1,  fontSize:14, lineHeight:20, fontWeight:'600'}}>Arrival</Text>
              <Text style={{color:'rgba(0, 0, 0, 0.5)',flex:1, fontSize:12, lineHeight:20, fontWeight:'400', textAlign:'right'}}>{item?.segment?.arrivalAirport}  - Terminal {item?.arrivalTerminal}</Text>
            </View>
            <View style={{flexDirection:'row', height:50, backgroundColor:'rgba(247, 247, 247, 1)'}}>
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12,color:'black', fontWeight:'400'}}>Terminal</Text>
                <Text style={{fontSize:14,color:'black', fontWeight:'bold'}}>{item?.arrivalTerminal}</Text>
              </View>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={{fontSize:12,color:'black', fontWeight:'400'}}>Est. Landing</Text>
                <Text style={{fontSize:14,color:'black', fontWeight:'bold'}}>{geTimeFromDate(item?.estimatedArrivalTime)}</Text>
              </View>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}></View>
              <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}></View>
            </View>
    </View>
  </View>
  )
}

export default InfoDetailFlight;