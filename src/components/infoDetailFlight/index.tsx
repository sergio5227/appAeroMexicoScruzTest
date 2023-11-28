import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import InfoFllightTime from '../infoFllightTime';
import { capitalizeFirstLetter, formatDate, geTimeFromDate } from '../../helpers';
import { InfoDetailFlightStyle, styles } from '../../styles';
import { FlightStatusCollection } from '../../model/OrigenDestinoResponseTypes';

interface InfoDetailFlightProps {
    item:FlightStatusCollection
}

const InfoDetailFlight = (props:InfoDetailFlightProps) => {
    const {item} = props;
  return (
    <View
    style={InfoDetailFlightStyle.content}>
    <View style={InfoDetailFlightStyle.firstView }>
      <View style={{flex: 1}}>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={InfoDetailFlightStyle.firstText}>
            {item?.segment?.operatingCarrier}{' '}
          </Text>
          <Text style={InfoDetailFlightStyle.operatingFlightCode}>
          {item?.segment?.operatingFlightCode}
          </Text>
        </View>
        <View style={{flex: 1, flexDirection: 'row'}}>
          <Text
            style={
              InfoDetailFlightStyle.dateTimeLocal}>
              {formatDate(item?.outGate?.dateTimeLocal)}
          </Text>
        </View>
      </View>

      <View style={InfoDetailFlightStyle.scondView}>
        <TouchableOpacity>
          <View
            style={{...InfoDetailFlightStyle.viewSecondContent , ...styles?.[item?.status]}}>
            <Text
              style={InfoDetailFlightStyle.status }>
              {capitalizeFirstLetter(item?.status)}
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
    <View style={InfoDetailFlightStyle.infoFllightTimeContent}>
    <InfoFllightTime item={item} />
    </View>
    <View style={{flex:1, padding:20}}>
            <View>
              <Text style={InfoDetailFlightStyle.flightDetails}>Flight details</Text>
            </View>
            <View style={{flexDirection:'row'}}>
            <View style={{transform: [{ rotate: '-40deg'}]}}>
              <Text style={InfoDetailFlightStyle.iConAir1}>
                <Icon name="airplane" color="black" /> 
              </Text>
              </View>
              <Text style={InfoDetailFlightStyle.departureTitle}>
                Departure
                </Text>
              <Text style={InfoDetailFlightStyle.departureText}>{item?.segment?.departureAirport} -Terminal {item?.boardingTerminal}</Text>
            </View>
            <View style={InfoDetailFlightStyle.detailFirst}>
              <View style={InfoDetailFlightStyle.detailFirstContent}>
                <Text style={InfoDetailFlightStyle.detailFirstTerminal}>Terminal</Text>
                <Text style={InfoDetailFlightStyle.detailFirstTerminalText}>{item?.boardingTerminal}</Text>
              </View>
              <View style={InfoDetailFlightStyle.detailSecond}>
                <Text style={InfoDetailFlightStyle.detailSecondGate}>Gate</Text>
                <Text style={InfoDetailFlightStyle.detailSecondGateText }>{item?.boardingGate}</Text>
              </View>
              <View style={InfoDetailFlightStyle.detailBoarding}>
                <Text style={InfoDetailFlightStyle.detailSecondGate}>Boarding</Text>
                <Text style={InfoDetailFlightStyle.detailSecondGateText}>{item?.boardingTime}</Text>
              </View>
              <View style={InfoDetailFlightStyle.detailBoarding}></View>
            </View>
            <View style={{flexDirection:'row'}}>
              <View style={{transform: [{ rotate: '40deg'}]}}>
              <Text style={InfoDetailFlightStyle.iconFirst}>
                <Icon name="airplane" color="black" /> 
              </Text>
              </View>
              <Text style={InfoDetailFlightStyle.iconFirst}>
                Arrival
              </Text>
              <Text style={InfoDetailFlightStyle.terminalText}>{item?.segment?.arrivalAirport}  - Terminal {item?.arrivalTerminal}</Text>
            </View>
            <View style={InfoDetailFlightStyle.contentLanding}>
              <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
                <Text style={InfoDetailFlightStyle.detailSecondGate}>Terminal</Text>
                <Text style={InfoDetailFlightStyle.detailSecondGateText}>{item?.arrivalTerminal}</Text>
              </View>
              <View style={InfoDetailFlightStyle.detailBoarding}>
                <Text style={InfoDetailFlightStyle.detailSecondGate}>Est. Landing</Text>
                <Text style={InfoDetailFlightStyle.detailSecondGateText}>{geTimeFromDate(item?.estimatedArrivalTime)}</Text>
              </View>
              <View style={InfoDetailFlightStyle.detailBoarding}></View>
              <View style={InfoDetailFlightStyle.detailBoarding}></View>
            </View>
    </View>
  </View>
  )
}

export default InfoDetailFlight;