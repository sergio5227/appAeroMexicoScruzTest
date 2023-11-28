import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import BackBtnNavigation from '../btnNavigation/backBtnNavigation';
import Icon from 'react-native-vector-icons/Ionicons';
interface HeaderGeneralProps {
  showBackBtn: boolean;
  title: string;
  subTitle: string;
  navigation?: any;
  origen: 'search' | 'results' | 'details'  | 'flightNumber'| 'destination';
}

const headerStyles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    height: 100,
    paddingVertical:20,
    justifyContent:'center',
    alignItems:'center',
  },
  headerTitle: {
    color: 'black',
    fontSize: 26,
    fontWeight: '600',
    textAlign: 'center',
    lineHeight: 32,
  },
  headerSubTitle: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 22,
  },
  headerSubTitleShow: {
    color: 'black',
    fontSize: 16,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 22,
    textDecorationLine:'underline'
  },
  backBtn: {
    borderColor: 'black',
    marginLeft:20,
  },
  content: {
    flex: 1,
    
    paddingRight:20
  },
  contentDetail:{
    flex: 1,
    textAlign:'right',
    justifyContent:'flex-end',
    alignItems:'flex-end',
    paddingRight:20
  },
  contentDetailInfo:{
    flex:1,
    flexDirection:'row'
  }
});

const HeaderGeneral = (props: HeaderGeneralProps) => {
  
  const {origen, showBackBtn} = props;
  
  const backScreen = () => {
    switch (origen) {
      case 'results':
        props?.navigation && props?.navigation.navigate('ScreenSearch');
        break;
      case 'details':
        props?.navigation && props?.navigation.navigate('ScreenResults');
      case 'destination':
          props?.navigation && props?.navigation.navigate('ScreenResults',{origen:origen});
        break;
    }
  };

  return (
    <View style={headerStyles.headerContainer}>

      {showBackBtn ? (
        <View style={headerStyles.backBtn}>
          <BackBtnNavigation accion={backScreen} />
        </View>        
      ) : null}
      
      {showBackBtn ? (<View style={headerStyles.contentDetail}>
        <Text style={headerStyles.headerTitle}>{props?.title}</Text>
        <View style={headerStyles.contentDetailInfo}>
            <Text style={headerStyles.headerSubTitle}>{props?.subTitle}</Text>
            <Text style={headerStyles.headerSubTitle}><Icon name="calendar" size={16} color="black" /></Text>
            <TouchableOpacity onPress={() => backScreen()}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}><Text style={headerStyles.headerSubTitleShow}>Change</Text>
            </View></TouchableOpacity>
        </View>
      </View>) : null}

      {!showBackBtn ? (<View style={headerStyles.content}>
        <Text style={headerStyles.headerTitle}>{props?.title}</Text>
        <Text style={headerStyles.headerSubTitle}>{props?.subTitle}</Text>
      </View>) : null}

    </View>
  );
};

export default HeaderGeneral;
