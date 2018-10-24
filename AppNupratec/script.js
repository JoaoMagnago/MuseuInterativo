const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/')
.then(connection => {
    connection.db('nupratec').dropDatabase()
    .then(() => {
        let Sala = require('./app/models/salas');
        let db = connection.db('nupratec');

        var sala = [
            { codigo: 0, nome: "Laboratorio de eletrotecnica", local: "Primeiro andar", porta: "p0.jpg", sala: "s0.jpg"},
            { codigo: 1, nome: "Laboratorio de maquinas eletricas", local: "Primeiro andar", porta: "p1.jpg", sala: "s1.jpg"},
            { codigo: 2, nome: "Laboratorio de automacao e controle", local: "Primeiro andar", porta: "p2.jpg", sala: "s2.jpg"},
            { codigo: 3, nome: "Laboratorio de eletronica 1", local: "Segundo andar", porta: "p3.jpg", sala: ""},
            { codigo: 4, nome: "Laboratorio de eletronica 2", local: "Segundo andar", porta: "p4.jpg", sala: ""},
            { codigo: 5, nome: "Laboratorio multidisciplinar", local: "Segundo andar", porta: "p5.jpg", sala: "s5.jpg"},
            { codigo: 6, nome: "Laboratorio de aplicacoes web", local: "Segundo andar", porta: "p6.jpg", sala: ""},
            { codigo: 7, nome: "Laboratorio de tecnologia e mecanica", local: "Primeiro andar anexo", porta: "p7.jpg", sala: ""},
            { codigo: 8, nome: "Oficina Baja", local: "Primeiro andar anexo", porta: "p8.jpg", sala: ""},
            { codigo: 9, nome: "Sala de soldagem", local: "Primeiro andar anexo", porta: "p9.jpg", sala: ""},
            ];

        db.collection('salas').insertMany(sala)
        .then(() => {
            console.log(sala);
        });
        // for (let i = 0; i < 10; i++) {
        //     let sala = Sala();
        //     sala.nome = 'Sala ' + i;
        //     sala.codigo = i;
        //     sala.local = '' + i + 'º Andar';
        //     sala.porta = 'p' + i + '.jpg';
        //     sala.sala = 's' + i + '.jpg';
        //     db.collection('salas').insertOne(sala)
        //     .then(() => {
        //         console.log(sala);
        //     });
        // }

        connection.close();
    });
});