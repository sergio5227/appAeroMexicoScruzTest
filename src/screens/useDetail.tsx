import { useState, useEffect } from 'react';
import { FlightStatusCollection } from '../model/OrigenDestinoResponseTypes';


export const useDetail = ( route:any , navigation:any ) => {
    const params = route.params;
    const item: FlightStatusCollection = params?.item || ``;
    const origin: 'flightNumber' | 'destination' = params?.origin || ``;
    const backScreen = () => {
      navigation.navigate('ScreenResults', {origen: origin});
    };

    return {
        item,
        backScreen
        
    }
}
