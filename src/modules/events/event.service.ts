import { PrismaClient } from '@prisma/client'
import { CreateEvent } from '../../entities/CreateEvent'

const prisma = new PrismaClient()

export class EventService {
  static async create(eventData: CreateEvent) {
    const event = await prisma.event.create({
      data: {
        name: eventData.name,
        tickets_available: eventData.tickets_available
      }
    })
    return event
  }

  static async find() {
    const event = await prisma.event.findMany()
    return event
  }

  static async findById(id: number) {
    const event = await prisma.event.findUnique({
      where: {
        id
      }
    })
    return event
  }

  static async buyTickets(id: number, amount: number) {
    const current = await prisma.event.findUnique({
      where: {
        id
      }
    })

    const updateTickets = current.tickets_available - amount

    const event = await prisma.event.update({
      where: {
        id
      },
      data: {
        tickets_available: updateTickets
      }
    })
    return event
  }
}
