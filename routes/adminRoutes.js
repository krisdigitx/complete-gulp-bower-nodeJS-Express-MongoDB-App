var express = require('express');
var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var books = [
            {
                title: 'War and Peace',
                genre: 'Historical Fiction',
                author: 'krishna shk',
                read: false
            },
            {
                title: '10AM',
                genre: 'Science Fiction',
                author: 'in the might',
                read: false
            },
            {
                title: '5PM',
                genre: 'Science Fiction',
                author: 'in the might',
                read: false
            },
            {
                title: 'Alphabet House',
                genre: 'Science Fiction',
                author: 'in the might',
                read: false
            },
            {
                title: 'Ginko Biloba',
                genre: 'Science Fiction',
                author: 'shyamalan',
                read: false
            },
            {
                title: 'MMA Muscle Pro',
                genre: 'UFC',
                author: 'Dana White',
                read: false
            },
            {
                title: 'twenty for 2',
                genre: 'Thriller ',
                author: 'speedster',
                read: false
            }
    
    ];
var router = function(nav){
    adminRouter.route('/addBooks')
        .get(function(req,res){
          var url = "mongodb://bookuser:bookpassword@ds035735.mongolab.com:35735/libraryapp";
           mongodb.connect(url, function(err, db){
               if (err){
                   return console.dir(err);
               }
               var collection = db.collection('books');
               collection.insertMany(books, 
                    function(err,results){
                           res.send(results);
                           db.close();
               });
           })
        });

    return adminRouter;
    
};

module.exports = router;