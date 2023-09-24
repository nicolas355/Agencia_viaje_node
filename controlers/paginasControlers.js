import { Viaje } from "../models/Viaje.js";

import { Testimoniales } from "../models/Testimoniales.js";






const  paginaInicio= async (req,res)=>{

    const promiseDB=[];
    promiseDB.push(Viaje.findAll( {limit:3} ))
    promiseDB.push(Testimoniales.findAll( {limit:3} ));

    try {
        const resultado=await Promise.all(promiseDB)


        res.render('inicio',{
            pagina:'Inicio',
            clase:'home',
            viajes:resultado[0],
            testimoniales:[resultado[1]]
        });
    } catch (error) {
        console.log(error)
    }



   
}


const paginaNosotros=(req,res)=>{


    res.render('nosotros',{
        pagina:'Nosotros'
    });

    

}

const paginaViajes= async (req,res)=>{

    // consultar bases de datos
    const viajes= await Viaje.findAll();


    res.render('viajes',{
        pagina:'Viajes',viajes
    });

    

}

const paginaTestimoniales=async (req,res)=>{

    try {
        const testimoniales=await Testimoniales.findAll();
        res.render('testimoniales',{
            pagina:'Testimoniales',
            testimoniales
        });
    
    } catch (error) {
            console.log(error)
    }


  
    

}


// muestra un viaje por su slug

const paginaDetalleViaje = async (req, res) => {

  
        const {viaje}=req.params

        try {
            const resultado=await Viaje.findOne({where: {slug:viaje} })

            res.render('viaje',{
                pagina:'Informacion del viaje',
                resultado
            })


        } catch (error) {
            console.log(error)
        }
}
export {
    paginaInicio,
    paginaNosotros,
    paginaViajes,
    paginaTestimoniales,
    paginaDetalleViaje
}