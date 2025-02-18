const express = require('express')
const app = express();
const cors = require('cors')
const cookieParser = require('cookie-parser')

require('dotenv').config();
require('./Connection/connect');

const userApi = require('./Routes/User')
const tasksApi = require('./Routes/Tasks')

app.use(cors())
app.use(cookieParser())
app.use(express.json())
app.use(express.urlencoded({extended: true}))

// app.get('/' ,(req, res) => {
//     res.send('hello backend')
// })

app.use('/api/user', userApi);
app.use('/api/task', tasksApi);


app.listen(3000)