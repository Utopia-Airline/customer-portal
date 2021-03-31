export default class Airport {
  iataId: string;
  name: string;
  city: string;
  country: string;
  timezone?: number;
  coords?: {
    latitude: number,
    longitude: number,
    altitude: number
  }
}
