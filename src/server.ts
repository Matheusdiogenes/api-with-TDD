import 'dotenv/config' 
import express from 'express'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.send({ api: 'api with prisma' })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`server run...`)
})