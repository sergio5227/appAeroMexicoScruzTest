import { useState, useEffect, useContext } from 'react';
import { FlightStatusCollection } from '../model/OrigenDestinoResponseTypes';
import { DataStateContext } from '../context/stateContext';
import { getByDestination, getByNumber } from '../http';

export const useResults = ( route:any  ) => {
    const { state,set } = useContext(DataStateContext);
  const params = route.params;
  const origin:'flightNumber'| 'destination' = params?.origen || ``;

  const estableceFav = (item:FlightStatusCollection)=> {
    const newState:FlightStatusCollection[] = Object.assign([],state);
    const stateUpdate = newState.map((e)=>{
      return {
        ...e,...{favorite : e?.id === item?.id ? true : e?.favorite}
      }
    })
    set(stateUpdate);
  }

  const removeFav = (item:FlightStatusCollection)=> {
    const newState:FlightStatusCollection[] = Object.assign([],state);
    const stateUpdate = newState.map((e)=>{
      return {
        ...e,...{favorite : e?.id === item?.id ? false : e?.favorite}
      }
    })
    set(stateUpdate); 
  }

    return {
        origin,
        state,
        estableceFav,
        removeFav        
    }
}
