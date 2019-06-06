var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CursovSchema = new Schema({
    nombrecurso : String,
    precio : Number,
    detalle : String
});

module.exports = mongoose.model('cursosvirtual',CursovSchema);
