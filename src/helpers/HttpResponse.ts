import { CreateEvent } from "../entities/CreateEvent"

export class HttpResponse {
  static create(event: CreateEvent) {
    return {
      body: event,
      statusCode: 200
    }
  }

  static buyTicket(amountTicket: number, event: CreateEvent) {
    if (event.tickets_available === 0) {
      return {
        body: {
          message: 'Tickets Sold Out.'
        },
        statusCode: 200
      }
    }

    if (amountTicket > event.tickets_available) {
      return {
        body: {
          message: 'This amount of tickets is not available.'
        },
        statusCode: 200
      }
    }

    event.buy(amountTicket)
    return {
      body: {
        message: 'Ticket(s) purchased successfully'
      },
      statusCode: 200
    }
  }
}
