import { StyleSheet } from 'react-native';

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