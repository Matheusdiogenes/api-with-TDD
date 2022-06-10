import { Request, Response, Router } from 'express'
import { eventsController } from './event.controller'
export const router = Router()

router.get('/events', eventsController.getEvents )
router.post('/events', eventsController.postCreateEvent)
router.post('/buy/tickets', eventsController.postBuyTickets )