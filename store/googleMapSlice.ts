import { GoogleMapStateProps, LocationProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";


const initialState :GoogleMapStateProps= {
    location: {
        lat: null,
        lng: null,
        address: null,
    },
    locationB: {
        lat: null,
        lng: null,
        address: null,
    }
};

export const googleMapSlice = createSlice({
  name: 'googleMap',
  initialState,
  reducers: {
      setLocation: (state, action: PayloadAction<LocationProps>) => {
          const { lat, lng, address } = action.payload;
          state.location = { lat, lng, address};
      },
      clearLocation: (state) => {
          state.location = {
            lat: null,
        lng: null,
        address: null,
          }
      },
      clearLocationB: (state) => {
        state.locationB = {
          lat: null,
      lng: null,
      address: null,
        }
    },
      setLocationB: (state, action: PayloadAction<LocationProps>) => {
        const { lat, lng,address } = action.payload;
        state.locationB = { lat, lng,address};
      },
   
  },
});



export const { setLocation,setLocationB,clearLocation,clearLocationB } = googleMapSlice.actions;

export default googleMapSlice.reducer;
