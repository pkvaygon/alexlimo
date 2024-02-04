import { GoogleMapStateProps, LocationProps, ResultsProps } from "@/types";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState: GoogleMapStateProps = {
    location: {
        lat: null,
        lng: null,
        address: null,
    },
    locationB: {
        lat: null,
        lng: null,
        address: null,
    },
    results: {
        serviceDetail: 'from',
        pickup: null,
        dropoff: null,
        travellers: 0,
        kids: 0,
        bags: 0
    }
};

export const googleMapSlice = createSlice({
    name: 'googleMap',
    initialState,
    reducers: {
        chooseServiceDetail: (state, action: PayloadAction<string>) => {
            state.results.serviceDetail = action.payload;
        },
        setLocation: (state, action: PayloadAction<LocationProps>) => {
            const { lat, lng, address } = action.payload;
            state.location = { lat, lng, address };
            state.results = {
              ...state.results,
              pickup: address ?? null,
          };
        },
        clearLocation: (state) => {
            state.location = {
                lat: null,
                lng: null,
                address: null,
            };
            
        },
        clearLocationB: (state) => {
            state.locationB = {
                lat: null,
                lng: null,
                address: null,
            };
        },
        setLocationB: (state, action: PayloadAction<LocationProps>) => {
            const { lat, lng, address } = action.payload;
            state.locationB = { lat, lng, address };
            state.results = {
              ...state.results,
              dropoff: address ?? null,
          };
        },


        incrementTravellers: (state) => {
            state.results = {
                ...state.results,
                travellers: state.results.travellers + 1,
            };
        },
        decrementTravellers: (state) => {
            state.results = {
                ...state.results,
                travellers: Math.max(state.results.travellers - 1, 0),
            };
        },
        incrementKids: (state) => {
            state.results = {
                ...state.results,
                kids: state.results.kids + 1,
            };
        },
        decrementKids: (state) => {
            state.results = {
                ...state.results,
                kids: Math.max(state.results.kids - 1, 0),
            };
        },
        incrementBags: (state) => {
            state.results = {
                ...state.results,
                bags: state.results.bags + 1,
            };
        },
        decrementBags: (state) => {
            state.results = {
                ...state.results,
                bags: Math.max(state.results.bags - 1, 0),
            };
        },
        
    },
});

export const { chooseServiceDetail,setLocation, setLocationB, clearLocation, clearLocationB,  incrementTravellers,
    decrementTravellers,
    incrementKids,
    decrementKids,
    incrementBags,
    decrementBags, } = googleMapSlice.actions;

export default googleMapSlice.reducer;
