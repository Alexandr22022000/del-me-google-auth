const express = require('express'),
    bodyParser = require('body-parser'),
    app = express();

app.set('port', (process.env.PORT || 3000));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
    res.setHeader('Access-Control-Allow-Credentials', true);
    next();
});
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    parameterLimit: 200000,
    limit: '20mb',
    extended: true
}));

app.use(express.static('public'));
app.listen(app.get('port'), () => console.log('Server is running at http://localhost:' + app.get('port') + '/'));