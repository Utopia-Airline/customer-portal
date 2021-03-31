import Route from "./Route";

export class FlightNode {
  id: number;
  routeId: number;
  route: Route;
  airplaneId: number;
  departureTime: Date;
  arrivalTime?: Date;
  seats: {
    total: number;
    reserved?: number;
    booked?: number;
    available: number;
    price: number;
  };
}
