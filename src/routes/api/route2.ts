import express from 'express'

const route2 = express.Router()

route2.get('/', (req, res) => {
    res.send('route2 api route')
})

export default route2
