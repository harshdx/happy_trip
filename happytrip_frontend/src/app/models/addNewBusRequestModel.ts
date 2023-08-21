export interface addNewBusRequest {
    busName: string
    source: string
    destination: string
    boardingPoint: string
    droppingPoint: string
    departureDate: string
    departureTime: string
    amenities: string[]
    coachType: string
    totalAvailableSeats: string
    classAvailable: string[]
    bookingPolicies: string[]
    classWithFare: ClassWithFare[]
  }
  
  export class ClassWithFare {
    'className': '';
    'fare': '';
  }