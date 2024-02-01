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
}
export interface GoogleMapStateProps {
  location: LocationProps;
}
export interface RootState {
  map: GoogleMapStateProps;
}