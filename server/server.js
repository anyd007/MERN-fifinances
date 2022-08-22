require("dotenv").config()

const express = require("express")
const mongoose = require('mongoose')
const incomeRouter = require('./routes/incomes')
const app = express()

//middleware
app.use((req, res, next)=>{
    console.log(req.path, req.method);
    next()
})
app.use(express.json())

//routs
app.use('/api/incomes', incomeRouter)

//połączenie z bazą danych
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log('Połączenie z baza danych udane');
    const herokuPort = process.env.PORT || process.env.LOCAL_PORT;
    app.listen(herokuPort, ()=>{
    console.log(`działam na porcie ${herokuPort}`)
})
})
.catch((error)=>{
    console.log(error, 'Błąd połączenia');
})
