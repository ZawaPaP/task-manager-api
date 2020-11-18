const express = require('express')
require('./db/mongoose')
const User = require('./models/user')
const Task = require('./models/task')
const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const app = express()
const port = process.env.PORT

// app.use((req, res, next) => {
//     if(req.method === 'GET') {
//         res.send('GET request are disabled')
//     }else{
//         next()
//     }

// })

// app.use((req, res, next) => {
//     res.status(503).send('Site is currently under maintenance')
// })

// const multer = require('multer')
// const upload = multer({
//     dest: 'avatars'
// })
// app.post('/users/avatar', upload.single('avatar'), (req, res) => {
//     res.send()
// })


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


app.listen(port, () => {
    console.log('Server is up on port ' + port)
})

