import { StyleSheet } from 'react-native';

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