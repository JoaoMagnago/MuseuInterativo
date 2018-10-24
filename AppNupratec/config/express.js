module.exports = () => {
    const express = require('express');
    const consign = require('consign');
    
    const app = express();

    consign({cwd: 'app'}).include('models').then('controllers').then('routes').into(app);

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(express.static('public'));
    
    app.use('/salas', app.routes.salas);

    return app;
}