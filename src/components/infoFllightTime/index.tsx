import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, View } from 'react-native';
import { geTimeFromDate, toHoursAndMinutes } from '../../helpers';
import { FlightStatusCollection, Status } from '../../model/OrigenDestinoResponseTypes';
import { InfoFllightTimeStyle } from '../../styles';

interface InfoFllightTimeProps {
    item:FlightStatusCollection
    timeDetail?:boolean
}

const InfoFllightTime = (props:InfoFllightTimeProps) => {
    const {item}= props
  return (    
    <View
        style={ 
          InfoFllightTimeStyle.content}>
        <View style={{paddingLeft: 20}}>
          <Text
            style={
              InfoFllightTimeStyle.text1}>
            {geTimeFromDate(item?.segment?.departureDateTime)}
          </Text>
          <Text style={InfoFllightTimeStyle.text2 }>
            {item?.segment?.departureAirport}
          </Text>
        </View>
        <View style={InfoFllightTimeStyle.content1}>
          <View
            style={
              InfoFllightTimeStyle.text3
              }></View>
          <View style={ {...InfoFllightTimeStyle.content2,...{bottom: item?.status !== Status.OnTime ? 26 : 23}} }>
              <View style={
                item?.status === Status.Arrived ? 
                {alignItems:'flex-end', position:'relative',top:24} : 
                  item?.status === Status.Delayed ? 
                  {alignItems:'flex-start', position:'relative',top:24} : 
                  item?.status === Status.InTheAir ? 
                  {alignItems:'center', position:'relative',top:24} : 
                  {alignItems:'flex-start', position:'relative',top:24,width:0}
                }>
              <Text style={item?.status !== Status.OnTime ? {width:16,height:16, backgroundColor:'white'}: {}}><Icon name="airplane" color="black" /></Text> 
              </View>
            <Text
              style={{...InfoFllightTimeStyle.text4,...{color: props?.timeDetail ? 'rgba(0, 0, 0, 0.4)' : 'white'}}}>
              {toHoursAndMinutes(item?.totalFlightTimeInMinutes)}
            </Text>
            
          </View>
          <View
            style={
              InfoFllightTimeStyle.content3
              }></View>
        </View>
        <View style={{paddingRight: 20}}>
          <Text
            style={ InfoFllightTimeStyle.text5}>
            {geTimeFromDate(item?.segment?.arrivalDateTime)}
          </Text>
          <Text
            style={
              InfoFllightTimeStyle.text6}>
            {item?.segment?.arrivalAirport}
          </Text>
        </View>
      </View>
  )
}

export default InfoFllightTime;