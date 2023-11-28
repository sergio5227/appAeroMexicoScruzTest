import { useState, useEffect } from 'react';
import { BtnModeSearch } from '.';


export const useBtnModeSearch = ( props:BtnModeSearch  ) => {
    const {searchType, action} = props;
    const [active, setActive] = useState<'flightNumber' | 'destination'>(
        'flightNumber',
      );

      const setType = (value: 'flightNumber' | 'destination') => {
        setActive(value);
        action(value);
      };
    
      useEffect(() => {
        setActive(searchType);
      }, [searchType]);
    


    return {
        setType,
        active,
        
    }
}
