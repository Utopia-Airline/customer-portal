import User from "./User";
import GuestContact from "./GuestContact";
import Passenger from "./Passenger";
import Flight from "./Flight";

export default class Booking {
  public constructor(init?: Partial<Booking>) {
    Object.assign(this, init);
  }

  id: number;
  isActive: boolean;
  // "USER" | "GUEST"
  type: string;
  confirmationCode: string;
  agent?: User;
  user?: User;
  guest?: GuestContact;
  passengers: Passenger[];
  flights: Flight[];
  totalPrice?: number;
}
