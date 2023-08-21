export interface generateNewTicketRequest {
    busId: number
    busName: string
    source: string
    destination: string
    boardingPoint: string
    droppingPoint: string
    departureDate: string
    departureTime: string
    coachType: string
    userId: string
    userName: string
    emailId: string
    phoneNumber: string
    seatsBooked: string[]
    totalAmountPaid: string
  }
  