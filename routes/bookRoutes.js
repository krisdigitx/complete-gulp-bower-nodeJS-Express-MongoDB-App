var express = require('express');
var bookRouter = express.Router();

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
                title: 'twenty for 2',
                genre: 'Thriller ',
                author: 'speedster',
                read: false
            }
    
    ];
bookRouter.route('/').get(function(req,res){
    res.render('bookListView',{title: 'Books!', nav: [
                    {Link: '/Books',
                     Text: 'Books'
                    },
                    {Link: '/Authors',
                     Text: 'Authors'
                    }],
                    books: books
                    
    });
});

bookRouter.route('/:id').get(function(req,res){
   var id = req.params.id;
   res.render('bookView',{title: 'Books!', nav: [
                    {Link: '/Books',
                     Text: 'Books'
                    },
                    {Link: '/Authors',
                     Text: 'Authors'
                    }],
                    book: books[id]
                    
    });
   //res.send("Hello single book!"); 
});


module.exports = bookRouter;