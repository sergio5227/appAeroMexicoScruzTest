import React, { createContext } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setData } from '../store/state'
import { FlightStatusCollection } from '../model/OrigenDestinoResponseTypes'

export interface DataStateContext {
    state:FlightStatusCollection[]
    set:(data:FlightStatusCollection[])=>void
}

export const DataStateContext = createContext({} as DataStateContext)

export const StateContextProvider = ({children}:{children:JSX.Element}) => {
    const dispatch = useDispatch();
    const { data } = useSelector((state: any) => state.data);

    const setStateApp = (data:FlightStatusCollection[])=> {
        dispatch(setData(data.sort(function(a, b) { return a.id - b.id && Number(b?.favorite) - Number(a?.favorite)  })));
    }

  return (
    <DataStateContext.Provider value={{
        state:data,
        set:setStateApp
    }}>
        {children}
    </DataStateContext.Provider>
  )
}