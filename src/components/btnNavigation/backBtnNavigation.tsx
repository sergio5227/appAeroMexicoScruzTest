import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../../styles';

interface BackBtnNavigationProps {
    accion: ( ) => void;
}

const BackBtnNavigation = ({  accion }: BackBtnNavigationProps) => {
  return (
    <TouchableOpacity
            onPress={ () => accion(  ) }
        >
            <View style={{ 
                ...styles.botonBack
            }}>
                <Text style={{ 
                    ...styles.botonTexto
                }}>
                   <Icon name="chevron-back-outline" size={16} color="black" /></Text>
            </View>
        </TouchableOpacity>
  )
}

export default BackBtnNavigation;