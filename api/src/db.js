const mongoose = require('mongoose')

 const uri = 'mongodb://127.0.0.1:27017/pokemon'
// const uri= 'mongodb+srv://lschacon1988:Luis1988@cluster0.qqekufj.mongodb.net/?retryWrites=true&w=majority'
//const uri = "mongodb+srv://luis1988:Luis1988@cluster0.mi7yxnu.mongodb.net/?retryWrites=true&w=majority"
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