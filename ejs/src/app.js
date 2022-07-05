import express from 'express'
import { router } from './routes.js'

const app = express()

//# MWs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

//# Engine
app.set('view engine', 'ejs')

//# views
app.set('views', './views')

//# levantando
app.listen(8080, () => {
	console.log('server up')
})
