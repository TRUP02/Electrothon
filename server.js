// require('dotenv').config();

const express = require('express');
const app = express()
const mongoose = require('mongoose');
const path = require('path');
const machine = require('./models/machine');
const bodyparser = require('body-parser');

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

const DATABASE_URL ='mongodb+srv://truptee:truptee02@cluster0.jlsdc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';

mongoose.connect(DATABASE_URL, connectionParams).then(() => {
    console.log('MongoDB Connected');
}).catch(err => console.log(err));

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.set('view engine', 'ejs');

app.use(express.json());

app.get('/',(req,res)=>{
    res.render('form');
});

const staticfiles = path.join(__dirname + '/public/CSS')
app.use(express.static(staticfiles));

const adminRouter = require('./routes/admin')
app.use('/admin', adminRouter);

app.listen(4000, () => {
    console.log("Server started at port 4000")
})