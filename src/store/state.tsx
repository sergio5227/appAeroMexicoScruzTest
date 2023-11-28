import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { FlightStatusCollection } from "../model/OrigenDestinoResponseTypes"


const dataSlice = createSlice({
  name: "data",
  initialState: {
    data: [] as FlightStatusCollection[]
  },
  reducers: {
    setData(state, action: PayloadAction<FlightStatusCollection[]>) {
      state.data = action.payload  as any
    }
  }
})

export const { setData } = dataSlice.actions
export default dataSlice.reducer