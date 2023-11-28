import { useState, useEffect, useContext } from 'react';
import { FlightStatusCollection } from '../model/OrigenDestinoResponseTypes';
import { DataStateContext } from '../context/stateContext';
import { getByDestination, getByNumber } from '../http';

export const useSearch = ( navigation:any ) => {
    const {set,state} = useContext(DataStateContext);

    const [searchType, setSearchType] = useState<'flightNumber'| 'destination'>('flightNumber');
  
    const search = async () => {
      const result = searchType ===  'flightNumber' ? await getByNumber() : await getByDestination();
      if(state?.length !== result?.length){
        set([]);
        set(result?.map((i:FlightStatusCollection)=>{
          return {...i,...{favorite:false}}
        }));
      }
      navigation.navigate('ScreenResults', {
        origen: searchType
      });
    }
  
    const changeTypeSearch = (type:'flightNumber'| 'destination') => {
      setSearchType(type)
    }

    return {
        setSearchType,
        searchType,
        search,
        changeTypeSearch
    }
}
