import 'dotenv/config'
import express from 'express'
import { Request, Response } from 'express'
import {router as routesEvent} from './modules/events/event.routes'

const app = express()

app.use(express.json())

app.get('/', (req: Request, res: Response) => {
  res.send({ message: 'Compre já seu ingresso.' })
})

app.use(routesEvent)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server run...`)
})