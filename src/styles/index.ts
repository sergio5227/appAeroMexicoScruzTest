import { StyleSheet } from 'react-native';


export const styles:any = StyleSheet.create({
    imgBackgrund:{
      flex: 1, 
      position: 'relative', 
      bottom: -15
    },
    btnSearchContent:{
      borderWidth: 1,
      height: 50,
      padding: 5,
      marginHorizontal: 5,
      backgroundColor: 'black',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
    },
    btnSearchText :{
      color: 'white',
      fontWeight: '600',
      lineHeight: 22,
      fontSize: 16,
    },
    generalPadding:{
      padding: 20
    },
    glbMargin: {
        marginHorizontal: 20
    },
    backGround:{
        flex:1,
        backgroundColor:'white'
    },
    botonBack: {
        height: 30,
        width: 30,
        backgroundColor: 'white',
        borderRadius: 100,
        justifyContent: 'center',
        alignItems:'center',
        textAlign:'center'
    },
    botonTexto: {
        textAlign: 'center',
        fontWeight:'bold',
        fontSize: 25,
        color:'black',
    },
    IN_THE_AIR:{
        backgroundColor:'#1872B3'
    },
    ON_TIME:{
        backgroundColor:'#2E9509'
    },
    DELAYED:{
        backgroundColor:'#FECB2F'
    },
    ARRIVED:{
        backgroundColor:'#000000'
    },
    item: {
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
});

export const btnModeSearchStyles = StyleSheet.create({
    btnModeSearchContainer: {
      flexDirection: 'row',
      paddingVertical: 20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    contentBtns: {
      flexDirection: 'row',
      paddingVertical: 1,
      paddingHorizontal: 2,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderColor: '#CCCCCC',
      borderRadius: 5,
    },
    botonBack: {
      height: 35,
      width: 100,
      backgroundColor: 'white',
      borderRadius: 5,
      justifyContent: 'center',
      alignItems: 'center',
      textAlign: 'center',
    },
    botonTexto: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 12,
      color: 'black',
    },
    btnActive: {
      backgroundColor: 'black',
      color: 'white',
      borderWidth: 0,
    },
    line: {
      flex: 1,
      borderWidth: 0.2,
      borderBottomColor: '#CCCCCC',
      borderBottomWidth: StyleSheet.hairlineWidth,
    },
  });


  export const filterSearchStyle = StyleSheet.create({
    btnModeSearchContainer: {
      flexDirection: 'row',
      paddingVertical: 20,
      paddingHorizontal:20,
      justifyContent: 'center',
      alignItems: 'center',
    },
    botonBack: {
        borderWidth:1,
        height: 55,
        /* padding:10, */
        paddingHorizontal:5,
        paddingVertical:10,
        marginHorizontal:5,
        backgroundColor: 'white',
        borderRadius: 5,
    },
    botonTextoPrimary: {
        textAlign: 'left',
        fontWeight: '400',
        fontSize: 10,
        color: 'black',
    },
    botonTexto: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'black',
    }
  });


  export const changeSearchTipeLegenStyle = StyleSheet.create({
    textFirst:{
      textAlign: 'center',
      color: 'rgba(0, 0, 0, 0.5)',
      fontWeight: '600',
      lineHeight: 22,
    },
    viewTry:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textSecond:{
      color: 'rgba(0, 0, 0, 0.5)',
      fontSize: 16,
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: 22,
    },
    textThird:{
      color: 'rgba(0, 0, 0, 0.5)',
      fontSize: 16,
      fontWeight: '400',
      textAlign: 'center',
      lineHeight: 22,
      textDecorationLine: 'underline',
    }
  });

  
  export const InfoDetailFlightStyle = StyleSheet.create({
      content:{
        flex: 1,
        backgroundColor: 'white',
        borderTopRightRadius: 25,
        borderTopLeftRadius: 25,
        borderBottomRightRadius: 0,
        borderBottomLeftRadius: 0,
      },
      firstView:{
        height: 60, 
        flexDirection: 'row',
        borderBottomWidth:.5, 
        borderBottomColor:'rgba(0, 0, 0, 0.3)'
      },
      firstText:{
        color: 'rgba(0, 0, 0, 0.3)',
        paddingLeft: 20,
        fontSize: 24,
        fontWeight: '600',
      },
      operatingFlightCode:{
        color: 'black', 
        fontSize: 24, 
        fontWeight: '600'
      },
      dateTimeLocal:{
        color: 'black',
        fontSize: 14,
        fontWeight: '400',
        paddingLeft: 20,
      },
      scondView:{
        flex: 1, 
        justifyContent:'center', 
        alignItems:'flex-end', 
        paddingRight:20
      },
      viewSecondContent:{
        height: 28,
        width:60, 
        padding: 5,
        marginHorizontal: 5,
        backgroundColor: 'black',
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
      },
      status:{
        color: 'white',
        fontWeight: '600',
        lineHeight: 20,
        fontSize: 12,
      },
      infoFllightTimeContent:{
        borderBottomWidth:.5, 
        borderBottomColor:'rgba(0, 0, 0, 0.3)', 
        marginHorizontal:20
      },
      flightDetails:{
        color:'black', 
        fontSize:18, 
        lineHeight:24, 
        fontWeight:'600'
      },
      iConAir1:{
        color:'black',
        flex:1,  
        fontSize:14, 
        lineHeight:20, 
        fontWeight:'600'
      },
      departureTitle :{
        color:'black',
        flex:1,  
        fontSize:14, 
        lineHeight:20, 
        fontWeight:'600'
      },
      departureText:{
        color:'rgba(0, 0, 0, 0.5)',
        flex:1, 
        fontSize:12, 
        lineHeight:20, 
        fontWeight:'400', 
        textAlign:'right'
      },
      detailFirst:{
        flexDirection:'row', 
        height:50, 
        backgroundColor:'rgba(247, 247, 247, 1)'
      },
      detailFirstContent:{ 
        flex:1, 
        justifyContent:'center', alignItems:'center'},
        detailFirstTerminal:{fontSize:12,color:'black', fontWeight:'400'},
        detailFirstTerminalText:{fontSize:14,color:'black', fontWeight:'bold'},
        detailSecond:{ flex:1, justifyContent:'center', alignItems:'center'},
        detailSecondGate:{fontSize:12,color:'black', fontWeight:'400'},
        detailSecondGateText:{fontSize:14,color:'black', fontWeight:'bold'},
        detailBoarding:{ flex:1, justifyContent:'center', alignItems:'center'},
        iconFirst:{color:'black',flex:1,  fontSize:14, lineHeight:20, fontWeight:'600'},
        terminalText:{color:'rgba(0, 0, 0, 0.5)',flex:1, fontSize:12, lineHeight:20, fontWeight:'400', textAlign:'right'},
        contentLanding:{flexDirection:'row', height:50, backgroundColor:'rgba(247, 247, 247, 1)'}
  });


  export const InfoFllightTimeStyle = StyleSheet.create({ 
    content:{
      flexDirection: 'row',
      height: 70,
      justifyContent: 'center',
      alignItems: 'center',
    },
    text1:{
      color: 'black',
      fontSize: 22,
      fontWeight: '600',
    },
    text2:{
      color: 'black',
      fontSize: 14,
      fontWeight: '400',
    },
    content1:{
      flex: 1, 
      flexDirection: 'row', 
      padding: 10
    },
    text3:{
      height: 10,
      width: 10,
      backgroundColor: 'black',
      borderRadius: 100,
    },
    content2:{
      flex: 1,
      position: 'relative',
      borderBottomWidth: 0.5,
      alignContent:'center'
    },
    text4:{
      position: 'relative',
      textAlign: 'center',
      top: 20,
      fontSize: 10,
      fontWeight: '400',
    },
    content3:{
      height: 10,
      width: 10,
      backgroundColor: 'black',
      borderRadius: 100,
    },
    text5:{
      color: 'black',
      textAlign: 'right',
      fontSize: 22,
      fontWeight: '600',
    },

    text6:{
      color: 'black',
      fontSize: 14,
      textAlign: 'right',
      fontWeight: '400',
    },

  });


  export const InfoResultsStyle = StyleSheet.create({

    content:{
      flexDirection:'row', paddingHorizontal:20
    },
    text1:{
      fontSize:14,
      fontWeight:'600', 
      lineHeight:20, 
      color:'black'
    },
    content1:{flex:1, alignItems:'flex-end'},
    text2:{fontSize:14,fontWeight:'400', lineHeight:20, textAlign:'right', color:'rgba(0, 0, 0, 0.5)'}

   });

   export const ResultListStyle = StyleSheet.create({

    contentStatus:{
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
    text1:{
      color: 'white',
      paddingLeft: 20,
      fontSize: 11,
      fontWeight: '600',
      lineHeight: 20,
    },
    contentDestination:{
      flex: 1,
      flexDirection: 'row-reverse',
      position: 'relative',
      alignItems: 'flex-end',
      justifyContent: 'center',
      top: 0,
      height: 28,
    },
    contentDestinationView:{
      width: 60,
      height: 28,
      justifyContent: 'center',
      alignItems: 'center',
    },
    fav:{
      flex: 1,
      color: 'black',
      paddingLeft: 20,
      textAlign: 'right',
      position: 'relative',
      bottom: 3,
      fontSize: 11,
      fontWeight: '600',
      lineHeight: 18,
    },
    contentOpetationCarrier:{
      flex: 1,
      flexDirection: 'row',
      top: 0,
      justifyContent: 'center',
      borderTopWidth: 1,
      borderTopColor: 'background: rgba(0, 0, 0, 0.4)',
      alignItems: 'center',
    },
    text2:{
      color: 'black',
      paddingLeft: 20,
      fontSize: 12,
      fontWeight: '600',
      lineHeight: 20,
    },
    text3:{
      color: 'black', fontSize: 12,
      fontWeight: '600',
      lineHeight: 20
    },
    text4:{
      flex: 1,
      color: 'black',
      fontSize: 11,
      fontWeight: '600',
      lineHeight: 20,
      textDecorationLine: 'underline',
      textAlign: 'right',
    },
    text5:{
      paddingRight: 20,
      textAlign: 'left',
      position: 'relative',
      top: 3,
    }

   });