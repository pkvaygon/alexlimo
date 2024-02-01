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
  pickup: string | null,
  dropoff: string | null,
  travellers: number,
  kids: number,
  bags: number,
}
export interface GoogleMapStateProps {
  location: LocationProps;
  locationB: LocationProps;
  results: ResultsProps;
}
export interface RootState {
  map: GoogleMapStateProps;
}
export interface DirectionsResponse {
  status: string;
  geocoded_waypoints: any[];
  routes: google.maps.DirectionsRoute[];
}