const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res, next) => {
  res.send('root')
  next()
})
app.use('/taco/([\$])tacobell', (req, res, next) => {
  res.redirect('test/taco')
  console.log('Time:', Date.now())
  next()
})
app.get('/taco/test/:test', (req, res) => {
  res.send(req.params)
})


const cb0 = (req, res, next) => {
  console.log('CB0')
  next()
}

const cb1 = (req, res, next) => {
  console.log('CB1')
  next()
}

app.get('/example/d', [cb0, cb1], (req, res, next) => {
  console.log('the response will be sent by the next function ...')
  next()
}, (req, res) => {
  res.send('Hello from D!')
})

app.route('/book')
  .get((req, res) => {
    res.send('Get a random book')
  })
  .post((req, res) => {
    res.send('Add a book')
  })
  .put((req, res) => {
    res.send('Update the book')
  })
  
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})