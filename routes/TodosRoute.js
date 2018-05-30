var express = require('express');
var router = express.Router();
var Todo = require('./../models/Todos');

//////////////////////
// @GET Todos/id?
/////////////////////

router.get('/:id?', function(request, response, next) {
    // le paramètre id existe-il ?
    if (request.params.id){
        //Okay, on appelle la méthode getById()
        Todo.getById(request.params.id, function(error, rows){
            if(error){
                response.json(error);
            } else {
                response.json(rows);
            }
        });
    } else {
        //Pas de paramètre, on appelle la méthode getAll()
        Todo.getAll(function(error, rows){
            if(error){
                response.json(error);
            } else {
                response.json(rows);
            }
        })
    }
});

/////////////////////////
//@POST {} --> Todo.add()
/////////////////////////

router.post('/', function(request, response, next){
    Todo.add(request.body, function(error,count){
        if(error){
            response.json(error)
        } else {
            response.json(request.body);
        }
    })
});

///////////////////////////
//@PUT {} --> Todo.update
///////////////////////////

router.put('/', function(request, response, next){
    Todo.update(request.body, function(error, rows){
        if(error){
            response.json(error)
        } else {
            response.json(rows);
        }
    })
});

///////////////////////////////
//@DELETE /id --> Todo.delete()
///////////////////////////////

router.delete('/:id', function(request, response, next){
    Todo.delete(request.params.id, function(error, count){
        if(error){
            response.json(error)
        } else {
            response.json(request.params.id);
        }
    })
});

//On exporte le router
module.exports = router;