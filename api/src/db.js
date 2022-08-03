//@ts-check
const mongoose = require('mongoose')

  const uri = 'mongodb://127.0.0.1:27017/pokemon'



mongoose.connect(uri)
.catch(err=>{
console.log('ERROR AL CONECTAR', err)
})

const db = mongoose.connection

db.on('open', _=>{
    console.log('conectado a ', uri)
})
db.on('error',err=>{
    console.log('error en db', err)
})