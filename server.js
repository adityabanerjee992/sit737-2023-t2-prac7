const express = require('express');
const app = express();
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/index.html'));
});

app.get('/health', function(req, res) {
    res.json({ status: 'ok' });
});

app.listen(3000, function() {
    console.log('Server started on port 3000');
});
