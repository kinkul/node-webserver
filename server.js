const express = require('express');
const exphbs  = require('express-handlebars');
 
const app = express();
const hbs=require('hbs');
require('./hbs/helpers');
app.use(express.static(__dirname + '/public'));
hbs.registerPartials(__dirname + '/views/parciales');

// app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');



app.get('/',(req, res)=>{


res.render('home',{
    nombre:'Miguel',
    // anio: new Date().getFullYear()
});



})

app.get('/about',(req, res)=>{


    res.render('about',{
       
        // anio: new Date().getFullYear()
    });
    
    
    
    })
 
app.listen(8080,()=>{
    console.log('Escuchando peticiones en el puerto 8080');
})



