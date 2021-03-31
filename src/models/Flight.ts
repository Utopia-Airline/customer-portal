export default class Flight {
  id: number;
  route?: {
    id: number;
    origin: {
      iataId: string;
      name: string;
      city: string;
      country: string;
    };
    destination: {
      iataId: string;
      name: string;
      city: string;
      country: string;
    };
  };
  departureTime?: Date;
  arrivalTime?: Date;
  totalSeats?: number;
  reservedSeats?: number;
  bookedSeats?: number;
  availableSeats?: number;
  seatPrice?: number;
}
