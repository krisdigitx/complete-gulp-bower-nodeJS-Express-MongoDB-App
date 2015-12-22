var express = require('express');

var app = express();

var port = process.env.PORT;

var bookRouter = require('./routes/bookRoutes');

//var bookRouter = express.Router();

app.use(express.static('public'));

app.set('views', './views');

//var handlebars = require('express-handlebars')
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//app.set('view engine', '.hbs');


app.set('view engine', 'ejs');


app.use('/Books', bookRouter);


app.get('/', function(req,res){
    res.render('index',{title: 'hello from AMARS!', nav: [
                    {Link: '/Books',
                     Text: 'Books'
                    },
                    {Link: '/Authors',
                     Text: 'Authors'
                    }]
        
    });
});

/*app.get('/books', function(req,res){
    res.send("Hello books!");
});*/

app.listen(port, function (err){
    console.log('running on port: '+ port);
});

