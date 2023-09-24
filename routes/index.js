
import express from 'express';
import { paginaInicio,paginaNosotros, paginaTestimoniales, paginaViajes,paginaDetalleViaje } from '../controlers/paginasControlers.js';
import { guardarTestimonial } from '../controlers/testimonialControler.js';

const router=express.Router();

router.get('/',paginaInicio)
 
router.get('/nosotros',paginaNosotros);

router.get('/viajes',paginaViajes);
router.get('/viajes/:viaje',paginaDetalleViaje);


router.get('/testimoniales',paginaTestimoniales);
router.post('/testimoniales',guardarTestimonial)

export default router;