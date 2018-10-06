const express = require('express')
const app = express()

app.use(express.urlencoded({extended: false}))
app.use(require('cors')())
var guestBook = require('./routes/guest-book');

app.get('/',function(req,res){
    res.send('wellcome home')  
})

app.use('/guest-book', guestBook);


app.listen(3001)