import { GoogleMapStateProps, LocationProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState :GoogleMapStateProps= {
    location: {
        lat: null,
        lng: null
    }
};

export const googleMapSlice = createSlice({
  name: 'googleMap',
  initialState,
  reducers: {
      setLocation: (state, action: PayloadAction<LocationProps>) => {
          const { lat, lng } = action.payload;
          state.location = { lat, lng };
      }
   
  },
});



export const { setLocation } = googleMapSlice.actions;

export default googleMapSlice.reducer;
