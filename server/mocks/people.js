module.exports = function(app) {
  var express = require('express');
  var peopleRouter = express.Router();

  peopleRouter.get('/', function(req, res) {
    res.send({
      'people': []
    });
  });

  peopleRouter.post('/', function(req, res) {
    res
      .status(400)
      .send({"errors":{"name":["Name id required"]}})
      .end();
  });

  peopleRouter.get('/:id', function(req, res) {
    res.send({
      'people': {
        id: req.params.id
      }
    });
  });

  peopleRouter.put('/:id', function(req, res) {
    res.send({
      'people': {
        id: req.params.id
      }
    });
  });

  peopleRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  app.use('/api/people', peopleRouter);
};
