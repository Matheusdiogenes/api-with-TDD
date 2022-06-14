interface ICreateEventProps {
  name: string
  tickets_available: number
  buy?: (amount: number) => void
}

export class CreateEvent implements ICreateEventProps {
  name: string
  tickets_available: number

  constructor({ name, tickets_available }: ICreateEventProps) {
    this.name = name,
      this.tickets_available = tickets_available
  }
}
