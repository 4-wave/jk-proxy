const express = require('express');
const app = express();
const path = require('path');
const proxy = require('http-proxy-middleware');
const port = 8080;

app.use('/', express.static(path.resolve(__dirname, '../public')));
app.use('/listing/:id', express.static(path.resolve(__dirname, '../public')));


app.use('/*', proxy({ target: 'http://localhost:3003/', changeOrigin: true }));

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
