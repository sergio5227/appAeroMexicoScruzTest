import { StyleSheet } from 'react-native';


export const styles:any = StyleSheet.create({
    glbMargin: {
        marginHorizontal: 20
    },
    backGround:{
        flex:1,
        backgroundColor:'white'
    },
    title:{
        color:'black',
        fontSize: 30,
        marginBottom: 10
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