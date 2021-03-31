var express    = require('express');        
var app        = express();                 
var bodyParser = require('body-parser');


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 3001;        

var router = express.Router();              

router.get('/', function(req, res) {
    console.log("gotcha")
    res.json({ message: 'https://docs.google.com/spreadsheets/d/1XsvTNTjPr0nNC1g3xkE_8G2R-6M-wYI4eTSsPwE9Z9w/edit#gid=0' });   
});

app.use('/api', router);

app.listen(port);
console.log('Listening port on ' + port);