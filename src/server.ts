import express from 'express'
import "./database"
import { routes } from './routes'

const app = express()
app.use(express.json())
app.use(routes)


const port = 3333
app.listen(port, () => console.log(`Server is running on port ${port}`))