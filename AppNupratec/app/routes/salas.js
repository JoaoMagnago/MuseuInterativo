module.exports = (app) => {
    const router = require('express').Router();
    const SalasController = app.controllers.salas;

    router.param('id', SalasController.handlerId);
    router.param('codigo', SalasController.handlerCodigo);

    router.get('/:codigo(\\d+)', SalasController.getByCodigo);
    router.get('/:id([a-f0-9]{12}|[a-f0-9]{24})', SalasController.getById);
    router.get('/', SalasController.getAll);

    return router;
}
