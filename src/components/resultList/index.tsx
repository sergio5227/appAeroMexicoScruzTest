import React, {useRef, useState} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ResultListStyle, styles} from '../../styles';
import {
  capitalizeFirstLetter,
} from '../../helpers';
import InfoFllightTime from '../infoFllightTime';
import { FlightStatusCollection } from '../../model/OrigenDestinoResponseTypes';

interface ResultListProps {
  data: FlightStatusCollection[];
  navigation: any;
  origin: 'flightNumber' | 'destination';
  setFavorite?: (item: FlightStatusCollection) => void;
  removeFavorite?: (item: FlightStatusCollection) => void;
}

interface ItemProps {
  item: FlightStatusCollection;
  onNavigate: (item: FlightStatusCollection) => void;
  onFavorite: (item: FlightStatusCollection) => void;
  onRemoveFavorite: (item: FlightStatusCollection) => void;
  origin: 'flightNumber' | 'destination';
}

const Item = ({
  item,
  onNavigate,
  onFavorite,
  onRemoveFavorite,
  origin,
}: ItemProps) => {
  

  const toggleSwitch = (item_: FlightStatusCollection) => {  
    if (item_?.favorite) {
      onRemoveFavorite(item_);
    } else {
      onFavorite(item_);
    }
  };

  return (
    <View style={{borderRadius: 12, height: 121, borderWidth: 1.5, margin: 20}}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            ...ResultListStyle.contentStatus ,
            ...styles?.[item?.status],
          }}>
          <Text
            style={ResultListStyle.text1}>
            {capitalizeFirstLetter(item?.status)}
          </Text>
        </View>
        {origin === 'destination' ? (
          <View
            style={ResultListStyle.contentDestination }>
            <View
              style={ResultListStyle.contentDestinationView }>
              <Switch
                trackColor={{false: '#CCCCCC', true: 'black'}}
                thumbColor={item?.favorite ? 'white' : 'white'}
                ios_backgroundColor="black"
                onValueChange={() => toggleSwitch(item)}
                value={item?.favorite}
              />
            </View>
            <Text
              style={ResultListStyle.fav }>
              Favorite
            </Text>
          </View>
        ) : null}
      </View>




      <InfoFllightTime item={item} timeDetail/>




      <View
        style={ResultListStyle.contentOpetationCarrier }>
          <View style={{flex: 1, flexDirection: 'row',height: 20}}>
          <Text
            style={ResultListStyle.text2 }>
            {item?.segment?.operatingCarrier}{' '}
          </Text>
          <Text style={ResultListStyle.text3 }>
          {item?.segment?.operatingFlightCode}
          </Text>
        </View>
        <View style={{height: 20, flex: 1}}>
          <TouchableOpacity onPress={() => onNavigate(item)}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={ResultListStyle.text4 }>
                {'Details'}
              </Text>
              <Text
                style={ResultListStyle.text5 }>
                <Icon name="chevron-forward-outline" size={16} color="black" />
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const ResultList = (props: ResultListProps) => {
  
  const flatlistRef:any = useRef<HTMLInputElement>();
  
  const scrollToIndex = () => {
    flatlistRef?.current && flatlistRef.current.scrollToIndex({ animated: true, index: 0 })
  }

  const renderItem = ({item}: {item: FlightStatusCollection}) => {
    return (
      <Item
        origin={props?.origin}
        item={item}
        
        onRemoveFavorite={() =>{
          props?.removeFavorite && props?.removeFavorite(item);
          scrollToIndex();
        }}
        onFavorite={() => {
          props?.setFavorite && props?.setFavorite(item);
          scrollToIndex();
        }}
        onNavigate={() =>
          props?.navigation.navigate('ScreenDetail', {
            item,
            origin: props?.origin,
          })
        }
      />
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
      }}>
      <FlatList
        ref={flatlistRef}
        data={props?.data}
        renderItem={renderItem}
        keyExtractor={item => item?.id + ''}
      />
    </SafeAreaView>
  );
};

export default ResultList;
