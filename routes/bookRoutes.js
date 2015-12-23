var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectId = require('mongodb').ObjectID;

var router = function(nav){

    bookRouter.route('/').get(function(req,res){
              
    var url = "mongodb://bookuser:bookpassword@ds035735.mongolab.com:35735/libraryapp";
    
    mongodb.connect(url, function(err, db){
        var collection = db.collection('books');
        collection.find({}).toArray(function (err, results){
        res.render('bookListView',{
                        title: 'Books!', 
                        nav: nav,
                        books: results
                        
        });  
        
        });
        
    });

});

    bookRouter.route('/:id').get(function(req,res){
        var id = new objectId(req.params.id);
        var url = "mongodb://bookuser:bookpassword@ds035735.mongolab.com:35735/libraryapp";
    
    mongodb.connect(url, function(err, db){
        var collection = db.collection('books');
        collection.findOne({_id: id}).toArray(function (err, results){
        res.render('bookView',{
                        title: 'Books!', 
                        nav: nav,
                        book: results
                });  
        
        });
    
    });
    
    return bookRouter;
};


module.exports = router;