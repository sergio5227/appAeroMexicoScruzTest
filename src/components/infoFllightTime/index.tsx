import React from 'react'
import { Text, View } from 'react-native';
import { geTimeFromDate, toHoursAndMinutes } from '../../helpers';
import { FlightStatusCollection } from '../../model/NumerodeVueloResponseTypes';

interface InfoFllightTimeProps {
    item:FlightStatusCollection
    timeDetail?:boolean
}

const InfoFllightTime = (props:InfoFllightTimeProps) => {
    const {item}= props
  return (    
    <View
        style={{
          flexDirection: 'row',
          height: 70,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={{paddingLeft: 20}}>
          <Text
            style={{
              color: 'black',
              fontSize: 22,
              fontWeight: '600',
            }}>
            {geTimeFromDate(item?.segment?.departureDateTime)}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              fontWeight: '400',
            }}>
            {item?.segment?.departureAirport}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row', padding: 10}}>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: 'black',
              borderRadius: 100,
            }}></View>
          <View
            style={{
              flex: 1,
              position: 'relative',
              bottom: !props?.timeDetail ? 5 : 10,
              borderBottomWidth: 0.5,
            }}>
            {props?.timeDetail ? <Text
              style={{
                color: 'rgba(0, 0, 0, 0.4)',
                position: 'relative',
                textAlign: 'center',
                top: 20,
                fontSize: 10,
                fontWeight: '400',
              }}>
              {toHoursAndMinutes(item?.totalFlightTimeInMinutes)}
            </Text> : null}
          </View>
          <View
            style={{
              height: 10,
              width: 10,
              backgroundColor: 'black',
              borderRadius: 100,
            }}></View>
        </View>
        <View style={{paddingRight: 20}}>
          <Text
            style={{
              color: 'black',
              textAlign: 'right',
              fontSize: 22,
              fontWeight: '600',
            }}>
            {geTimeFromDate(item?.segment?.arrivalDateTime)}
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 14,
              textAlign: 'right',
              fontWeight: '400',
            }}>
            {item?.segment?.arrivalAirport}
          </Text>
        </View>
      </View>
  )
}

export default InfoFllightTime;