var express = require('express');
var bodyparser = require('body-parser');
var Cursosv = require('../models/cursosv');
var router =express.Router();

//Configurar salida End Point Bodyparser

router.use(bodyparser.urlencoded({extended:true}));
router.use(bodyparser.json());

//Configuracion de Routes

//Hacer un Middleware

router.use(function (req,re,next){
    console.log("respuesta")
    next();
})

router.get('/',function(req,res){
    res.sendFile("../view/login.html");
})

// Metodos del Crud EndPoint
// (1)End Point para registrar nuevos cursos virtuales
// (2)Recuperar todos los cursos
// (3)Actualizar cursos
// (2)Recuperar todos los cursos

router.route('/cursosv')
.post(function(req,res) {
    var cursosv = new Cursosv();
    cursosv.nombrecurso = req.body.nombrecurso;
    cursosv.precio = req.body.precio;
    cursosv.detalle = req.body.detalle;
    cursosv.save(function(error){
        if (error)
            res.status(500).send('Error al grabar:'+error);
        res.json({mensaje:"Todo marcho bien"});
    });
})
.get(function(req,res){
    Cursosv.find(function(error,cursosv){
        if (error)
            res.status(500).send('Error mostrar'+ error);
        res.json(cursosv);
    });
});

router.route('/cursosv/:cursosv_id')
.get(function(req,res){
    Cursosv.findById(req.params.cursosv_id,function(error,Cursosv){
        if (error)
            res.status(500).send('Error mostrar:'+ error);
        res.json(cursosv);
    });
})
.put(function (req,res){
    Cursosv.findById(req.params.cursosv_id,function(error,cursosv){
        if(error)
           res.status(500).send('Error al actualizar:'+ error);
        res.json({mensaje:"Todo marcho bien"});
    });
})
.delete(function (req,res){
    Cursosv.remove({
        _id:req.params.cursosv_id
    }, function (error){
        if (error)
            res.status(500).send('error al borrar:'+ error);
        res.json({mensaje:"Todo marcho bien"});
    });
});

module.exports = router;





