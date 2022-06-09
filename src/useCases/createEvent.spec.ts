import { CreateEvent } from "../entities/CreateEvent"

class HttpResponse {
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

// Decrição do teste
describe('Create event', () => {
  const newEvent = {
    name: 'Real Madrid vs Barcelona',
    tickets_available: 10
  }
  // Criando o evento
  const event = new CreateEvent(newEvent)

  // Teste 1
  test('Should return event data', () => {
    const httpResponse = HttpResponse.create(event)
    expect(httpResponse.body.name).toBe(newEvent.name)
    expect(httpResponse.body.tickets_available).toBe(newEvent.tickets_available)
    expect(httpResponse.statusCode).toBe(200)
  })
  
  // Teste 2
  test('Should return event data with the smallest ticket amount', () => {
    const amountTicket = event.tickets_available
    const quantityPurchased = 9
    const httpResponse = HttpResponse.buyTicket(quantityPurchased, event)

    expect(httpResponse.body.message).toBe('Ticket(s) purchased successfully')
    expect(httpResponse.statusCode).toBe(200)
    expect(event.tickets_available).toBe(amountTicket - quantityPurchased)
  })

  // // Teste 3
  test('Should return message: This amount of tickets is not available.', () => {
    const quantityPurchased = 2
    const httpResponse = HttpResponse.buyTicket(quantityPurchased, event)
    
    expect(httpResponse.body.message).toBe('This amount of tickets is not available.')
    expect(httpResponse.statusCode).toBe(200)
  })

  // Teste 4
  test('Should return event data with the smallest ticket amount', () => {
    const amountTicket = event.tickets_available
    const quantityPurchased = 1
    const httpResponse = HttpResponse.buyTicket(quantityPurchased, event)

    expect(httpResponse.body.message).toBe('Ticket(s) purchased successfully')
    expect(httpResponse.statusCode).toBe(200)
    expect(event.tickets_available).toBe(amountTicket - quantityPurchased)
  })

  // Teste 5
  test('Should return message: Tickets Sold Out.', () => {
    const quantityPurchased = 1
    const httpResponse = HttpResponse.buyTicket(quantityPurchased, event)
    
    expect(httpResponse.body.message).toBe('Tickets Sold Out.')
    expect(httpResponse.statusCode).toBe(200)
    expect(event.tickets_available).toBe(0)
  })

})