import User from "./User";
import GuestContact from "./GuestContact";
import Passenger from "./Passenger";
import Flight from "./Flight";

export default class BookingCreation {
  public constructor(init?: Partial<BookingCreation>) {
    Object.assign(this, init);
  }

  id?: number;
  isActive: boolean;
  // "USER" | "GUEST"
  type?: string;
  confirmationCode?: string;
  agent?: User;
  user?: User;
  guest?: GuestContact;
  passengers: Passenger[];
  flights: {id: number}[];
  totalPrice?: number;
}
