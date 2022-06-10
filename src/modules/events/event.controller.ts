import { Request, Response } from 'express'

export class EventController {

  static getEvents(req: Request, res: Response){
    return res.send({
      message: "Todos os eventos"
    })
  }

  static postCreateEvent(req: Request, res: Response){
    return res.send({
      message: "Criar evento"
    })
  }

  static postBuyTickets(req: Request, res: Response){
    return res.send({
      message: "Comprar ingressos"
    })
  }
}
