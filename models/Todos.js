//Intégrer la connexion à la base de données 

var database = require('./../dbconnect');

//Création de la classe Todos
var Todos = {
    //Récupère la totalité des tâches, trier par date de debut
    getAll: function(callback) {
        return database.query(
            'SELECT id, task, debut, fin FROM todos ORDER BY debut',
            callback
        );
    },

    //Récupère une tâche par son id
    getById: function(id, callback){
        return database.query(
            'SELECT id, task, debut, fin FROM todos WHERE id = ?',
            [id],
            callback
        );
    },
    //ajout de tâche, on ne met pas l'id car il est en autoincrément
    add: function(Todo, callback){
        return database.query(
            'INSERT INTO todos (task, debut, fin) VALUES (?,?,?)',
            [Todo.task, Todo.debut, Todo.fin],
            callback
        );
    },
    //faire un update
    update: function(Todo, callback){
        return database.query(
            'UPDATE todos SET task=?, debut=?, fin=? WHERE id=?',
            [Todo.task, Todo.debut,Todo.fin, Todo.id],
            callback
        );
    },
    //supprimer un élément
    delete: function(id, callback) {
        return database.query(
            'DELETE FROM todos WHERE id=?',
            [id],
            callback
        );
    }
}

// on n'oublie pas d'exporter la classe
module.exports = Todos;