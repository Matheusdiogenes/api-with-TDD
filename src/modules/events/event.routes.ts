import { Request, Response, Router } from 'express'

export const router = Router()

router.get('/events',(req: Request, res: Response) => {
  return res.send({
    message: "Todos os eventos"
  })
})

router.post('/events',(req: Request, res: Response) => {
  return res.send({
    message: "Criar evento"
  })
})

router.post('/buy/tickets',(req: Request, res: Response) => {
  return res.send({
    message: "Comprar ingressos"
  })
})