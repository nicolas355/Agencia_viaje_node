/*const express=require('express');*/

import express from 'express';
import router from './routes/index.js';
import db from './config/db.js';



const app=express();

// conectar base de datos



db.authenticate()
    .then( () => console.log('Base de datos conectada') )
    .catch( error => console.log(error));

const port=process.env.PORT || 4000;

//Habilitar Pug
app.set('view engine','pug');


// midelwer obtener año actual

app.use((req,res,next)=>{
  const year=new Date();
  res.locals.actualYear=year.getFullYear();
  res.locals.nombreSitio="Agencia de viajes";


 return next();
});


// agregar body parse para leer datos de form

app.use(express.urlencoded({extended:true}))




// definir  la carpeta publica

app.use(express.static('public'));



// agregar Routers

app.use('/',router);



app.listen(port,()=>{
    console.log(` El servidor esta funcionando en el puerto ${port}`)
});