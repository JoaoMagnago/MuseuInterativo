const ObjectID = require('mongodb').ObjectID;
const fs = require('fs');
const path = require('path');

function readImage(sala) {
    if (sala != null) {
        sala.porta = fs.readFileSync(path.join(__dirname, '../../img', sala.porta), 'base64');
        if(sala.sala != "")
            sala.sala = fs.readFileSync(path.join(__dirname, '../../img', sala.sala), 'base64');
    }

    return sala;
}

module.exports = (app) => {
    return {
        handlerId: (req, res, next, id) => {
            req.id = id;
            next();
        },
        handlerCodigo: (req, res, next, codigo) => {
            req.codigo = codigo;
            next();
        },
        getAll: (req, res) => {
            let db = app.db;
            db.collection('salas').find().toArray((err, data) => {
                if (err) {
                    res.status(404).json(err);
                }
                else {
                    for (let i = 0; i < data.length; i++) {
                        data[i] = readImage(data[i]);
                    }
    
                    res.json(data);
                }
            });
        },
        getById: (req, res) => {
            let db = app.db;
            db.collection('salas').findOne({'_id': ObjectID(req.id)}, (err, data) => {
                if (err) {
                    res.status(404).json(err);
                }
                else {
                    data = readImage(data);

                    res.json(data);
                }
            });
        },
        getByCodigo: (req, res) => {
            let db = app.db;
            db.collection('salas').findOne({'codigo': Number(req.codigo)}, (err, data) => {
                if (err) {
                    res.status(404).json(err);
                }
                else {
                    data = readImage(data);

                    res.json(data);
                }
            });
        }
    };
}