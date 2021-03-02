const express = require('express');
const app = express();
const db = require('./config/db');
const port = process.env.PORT || 4000;
const cors = require('cors')

app.use(cors())

const AuthController = require('./controller/authController');
app.use('/api/auth',AuthController);


app.listen(port,() => {
    console.log(`Server is running on port ${port}`)
})