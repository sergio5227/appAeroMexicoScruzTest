import React, {useState} from 'react';
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
import {FlightStatusCollection} from '../../model/NumerodeVueloResponseTypes';
import {styles} from '../../styles';
import {
  capitalizeFirstLetter,
  geTimeFromDate,
  toHoursAndMinutes,
} from '../../helpers';
import InfoFllightTime from '../infoFllightTime';

interface ResultListProps {
  data: FlightStatusCollection[];
  navigation: any;
  origin: 'flightNumber' | 'destination';
  setFavorite?: (item: FlightStatusCollection) => void;
  removeFavorite?: (item: FlightStatusCollection) => void;
  favs?: boolean;
}

interface ItemProps {
  item: FlightStatusCollection;
  onNavigate: (item: FlightStatusCollection) => void;
  onFavorite: (item: FlightStatusCollection) => void;
  onRemoveFavorite: (item: FlightStatusCollection) => void;
  origin: 'flightNumber' | 'destination';
  favs?: boolean;
}

const Item = ({
  item,
  onNavigate,
  onFavorite,
  onRemoveFavorite,
  origin,
  favs,
}: ItemProps) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = (item_: FlightStatusCollection) => {
    setIsEnabled(previousState => !previousState);
    if (favs) {
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
            ...{
              position: 'relative',
              justifyContent: 'center',
              top: 0,
              height: 28,
              width: 80,
              borderTopRightRadius: 0,
              borderTopLeftRadius: 10,
              borderBottomRightRadius: 17,
              borderBottomLeftRadius: 0,
            },
            ...styles?.[item?.status],
          }}>
          <Text
            style={{
              color: 'white',
              paddingLeft: 20,
              fontSize: 11,
              fontWeight: '600',
              lineHeight: 20,
            }}>
            {capitalizeFirstLetter(item?.status)}
          </Text>
        </View>
        {origin === 'destination' ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row-reverse',
              position: 'relative',
              alignItems: 'flex-end',
              justifyContent: 'center',
              top: 0,
              height: 28,
            }}>
            <View
              style={{
                width: 60,
                height: 28,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Switch
                trackColor={{false: '#CCCCCC', true: 'black'}}
                thumbColor={isEnabled ? 'white' : 'white'}
                ios_backgroundColor="black"
                onValueChange={() => toggleSwitch(item)}
                value={favs ? true : isEnabled}
              />
            </View>
            <Text
              style={{
                flex: 1,
                color: 'black',
                paddingLeft: 20,
                textAlign: 'right',
                position: 'relative',
                bottom: 3,
                fontSize: 11,
                fontWeight: '600',
                lineHeight: 18,
              }}>
              Favorite
            </Text>
          </View>
        ) : null}
      </View>




      <InfoFllightTime item={item} timeDetail/>




      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          top: 0,
          justifyContent: 'center',
          borderTopWidth: 1,
          borderTopColor: 'background: rgba(0, 0, 0, 0.4)',
          alignItems: 'center',
        }}>
        <View style={{height: 20, flex: 1}}>
          <Text
            style={{
              color: 'black',
              paddingLeft: 20,
              fontSize: 11,
              fontWeight: '600',
              lineHeight: 20,
            }}>
            AM 500
          </Text>
        </View>

        <View style={{height: 20, flex: 1}}>
          <TouchableOpacity onPress={() => onNavigate(item)}>
            <View style={{flexDirection: 'row'}}>
              <Text
                style={{
                  flex: 1,
                  color: 'black',
                  fontSize: 11,
                  fontWeight: '600',
                  lineHeight: 20,
                  textDecorationLine: 'underline',
                  textAlign: 'right',
                }}>
                {'Details'}
              </Text>
              <Text
                style={{
                  paddingRight: 20,
                  textAlign: 'left',
                  position: 'relative',
                  top: 3,
                }}>
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
  const renderItem = ({item}: {item: FlightStatusCollection}) => {
    return (
      <Item
        origin={props?.origin}
        item={item}
        favs={props?.favs}
        onRemoveFavorite={() =>
          props?.removeFavorite && props?.removeFavorite(item)
        }
        onFavorite={() => props?.setFavorite && props?.setFavorite(item)}
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
        marginTop: !props?.favs ? StatusBar.currentHeight || 0 : 0,
      }}>
      <FlatList
              ListHeaderComponent={
                <>
                  
                </>}
                ListFooterComponent={
                  <>
                  
                </>
                }
          
        data={props?.data}
        renderItem={renderItem}
        keyExtractor={item => item?.id + ''}
      />
    </SafeAreaView>
  );
};

export default ResultList;
