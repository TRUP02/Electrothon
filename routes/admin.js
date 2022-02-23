const express = require('express');
const router = express.Router();
const app = express();
const Machine = require('../models/machine');
const bodyparser = require('body-parser');

app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

router.get('/save',(req,res)=>{
    Machine.find().then((data)=>{
        res.render('admin',{data:data});
        console.log(data);
    }).catch(err => console.log(err));
})

app.set('view engine', 'ejs');

router.get('/login',(req,res)=>{
    res.render('login');
});
const  credential = {
    email : "admin@gmail.com",
    password : "admin123"
}

// login user
router.post('/person', (req, res)=>{
    if(req.body.email == credential.email && req.body.password == credential.password){
        res.render('admin');
    }
    else{
        res.end("Invalid Username")
    }
});
// router.get('/index',(req,res)=>{
//     res.render('index');
// })
router.get('/form',(req,res)=>{
    res.render('form');
});

router.post('/form', (req, res) => {
    const machine = new Machine({
        id: req.body.id,
        name: req.body.name,
        type: req.body.type
    })
    machine.save().then(() => {
        console.log("Data Saved");
        res.render('index',{data:data});
    })
        .catch(err => console.log(err));
});
module.exports = router;