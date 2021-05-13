const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/BDSHUE-APP'));

app.use(express.static(path.join(__dirname, 'dist','BDSHUE-APP'));


app.get('/*', (req, res) =>
    res.sendFile(path.join(__dirname,'dist','BDSHUE-APP','index.html'));
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
