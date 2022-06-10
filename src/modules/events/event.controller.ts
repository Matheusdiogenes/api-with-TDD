import { Request, Response } from 'express'

export const eventsController = {
  getEvents: (req: Request, res: Response) => {
    return res.send({
      message: "Todos os eventos"
    })
  },

  postCreateEvent: (req: Request, res: Response) => {
    return res.send({
      message: "Criar evento"
    })
  },

  postBuyTickets: (req: Request, res: Response) => {
    return res.send({
      message: "Comprar ingressos"
    })
  }


}