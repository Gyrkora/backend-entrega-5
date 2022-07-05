import express from 'express'
import { router } from './routes.js'

const app = express()
import { engine } from 'express-handlebars'

//# MWs
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use('/', router)

//# Engine
app.engine('handlebars', engine({ extname: '.handlebars' }))
app.set('view engine', 'handlebars')

//# views
app.set('views', './views')

//# levantando
app.listen(8080, () => {
	console.log('server up')
})
