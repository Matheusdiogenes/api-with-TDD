import { Router } from 'express'
import { EventController } from './event.controller'
export const router = Router()

router.get('/events', EventController.getEvents )
router.post('/events', EventController.postCreateEvent)
router.post('/buy/tickets', EventController.postBuyTickets )