var express = require('express'),
    app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req, res) {
    res.sendfile(__dirname + '/view.html');
});

app.listen(8383);

console.log('JS editor started on http://localhost:8383/');