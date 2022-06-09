interface ICreateEventProps {
  name: string
  tickets_available: number
}

export class CreateEvent {
  name: string
  tickets_available: number

  constructor({ name, tickets_available }: ICreateEventProps) {
    this.name = name,
      this.tickets_available = tickets_available
  }

  buy(amount: number) {
    return this.tickets_available = this.tickets_available - amount
  }
}
