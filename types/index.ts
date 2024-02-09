import { StaticImageData } from "next/image";

export type NavlinksProps = {
    id: number;
    label: string;
    href: string;
};
  
export interface LocationClickedEvent {
    latLng: {
      lat: () => number;
      lng: () => number;
    };
}
  export interface LocationProps {
  lat: number | null;
  lng: number | null;
  address?: string | null;
}
export interface ResultsProps{
  airportName: string,
  serviceDetail: string,
  hours?: number;
  pickup: string | null,
  dropoff: string | null | undefined,
  travellers: number,
  bags: number,
  selectedVehicle?:VehicleProps | null,
  airline: string,
  flight: string
}
export interface GoogleMapStateProps {
  location: LocationProps;
  locationB: LocationProps;
  results: ResultsProps;
  checkPricing: boolean;
  termsConditions: boolean;
}
export interface RootState {
  map: GoogleMapStateProps;
}
export interface DirectionsResponse {
  status: string;
  geocoded_waypoints: any[];
  routes: google.maps.DirectionsRoute[];
}
export interface VehicleProps{
    image: string,
    name: string,
    passengers: number,
    bags: number,
    price: number,
}
export interface BlogCardsProps{
  image:string,
  label: string,
  description: string,
}

export interface AiportProps{
  key: string,
  name: string,
  address: string,
  lat: number,
  lng: number,
}
export interface ReviewProps{
  rating: number,
  image: string,
  label: string,
  description: string,
}