const express = require('express');
const {engine} = require ('express-handlebars');
const path = require ('path');

const app = express();

app.use(express.json);
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname,'static')));

app.set('view engine','.hbs');
app.engine('.hbs',engine({defaultLayout: false}));
app.set('views', path.join(__dirname,'static'));

const users = [];
let err = '';
console.log('server work');

app.get('/welcome',(req,res) =>{
    res.send('Welcome on server')
})

app.get('/login',(req,res)=>{res.render('login')})

app.listen(5200,()=>{
    console.log('Server started on port 5200');
});
















