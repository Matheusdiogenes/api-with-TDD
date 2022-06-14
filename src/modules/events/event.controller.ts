import { Request, Response } from 'express'
import { HttpResponse } from '../../helpers/HttpResponse'
import { EventService } from './event.service'

export class EventController {
  
  static async getEvents(req: Request, res: Response){
    const event = await EventService.find()
    return res.send([
      ...event
    ])
  }

  static async postCreateEvent(req: Request, res: Response){
    const createEvent = HttpResponse.create(req.body)
    await EventService.create(createEvent.body)
    return res.send(createEvent.body).status(createEvent.statusCode)
  }

  static async postBuyTickets(req: Request, res: Response){
    const id = req.body.id
    const amount = req.body.amount

    const event = await EventService.findById(id)
    const buyTickets = HttpResponse.buyTicket(amount, event)

    if(buyTickets.body.message == 'Ticket(s) purchased successfully'){
      await EventService.buyTickets(id, amount)
    }
    return res.send(buyTickets.body).status(buyTickets.statusCode)
  }
}
