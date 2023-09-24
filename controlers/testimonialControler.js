import { Testimoniales } from "../models/Testimoniales.js";

const guardarTestimonial = async (req, res) => {
  console.log(req.body);


  // validar

  const { nombre, correo, mensaje } = req.body;
  const errores = [];

  if (nombre.trim() === "") {
    errores.push({ mensaje: "el nombre esta vacio" });
  }

  if (correo.trim() === "") {
    errores.push({ mensaje: "el correo esta vacio" });
  }

  if (mensaje.trim() === "") {
    errores.push({ mensaje: "el mensaje esta vacio" });
  }

  if (errores.length > 0) {

    // consultar testimoniales existentes

    const testimoniales=await Testimoniales.findAll();

    res.render("testimoniales", {
      pagina: "Testimoniales",
      errores,
      nombre,
      correo,
      mensaje,
      testimoniales
    });
  } else{

      try {
        await Testimoniales.create({
          nombre,correo,mensaje
        });

        res.redirect('/testimoniales')


      } catch (error) {
        
      }


  }





};

export { guardarTestimonial };
