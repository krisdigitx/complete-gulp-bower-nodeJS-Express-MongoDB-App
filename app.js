var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var passport = require('passport');
var session = require('express-session');

var app = express();

var port = process.env.PORT;

var nav = [
                    {Link: '/Books',
                     Text: 'Book'
                    },
                    {Link: '/Authors',
                     Text: 'Authors'
                    }]


var bookRouter = require('./routes/bookRoutes')(nav);
var adminRouter = require('./routes/adminRoutes')(nav);
var authRouter = require('./routes/authRoutes')(nav);
//var bookRouter = express.Router();

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.set('views', './views');

//var handlebars = require('express-handlebars')
//app.engine('.hbs', handlebars({extname: '.hbs'}));
//app.set('view engine', '.hbs');


app.set('view engine', 'ejs');



app.use('/Books', bookRouter);
app.use('/Admin', adminRouter);
app.use('/Auth', authRouter);

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

