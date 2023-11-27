import React, { createContext,useState } from 'react'
import { FlightStatusCollection } from '../model/NumerodeVueloResponseTypes'

export interface DataStateContext {
    state:FlightStatusCollection[]
    set:(data:FlightStatusCollection[])=>void
    favs:FlightStatusCollection[]
    setFavs:(data:FlightStatusCollection)=>void
    removeFavs:(data:FlightStatusCollection[])=>void
}

export const DataStateContext = createContext({} as DataStateContext)

export const StateContextProvider = ({children}:{children:JSX.Element}) => {

    const [state,setState] = useState<FlightStatusCollection[]>([]);
    const [favs,setFavs] = useState<FlightStatusCollection[]>([]);

    const setStateApp = (data:FlightStatusCollection[])=> {
        setState(data);
    }

    const setFav = (data:FlightStatusCollection)=> {
        const fa = Object.assign([],favs);
        fa.push(data);
        setFavs(fa);
    }

    const removeFav = (data:FlightStatusCollection[])=> {
        setFavs(data);
    }

  return (
    <DataStateContext.Provider value={{
        state,
        set:setStateApp,
        favs,
        setFavs:setFav,
        removeFavs:removeFav
    }}>
        {children}
    </DataStateContext.Provider>
  )
}
