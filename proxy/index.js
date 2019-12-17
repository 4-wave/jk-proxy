const express = require('express');
const app = express();
const path = require('path');
const port = 8080;

app.use('/*', express.static(path.resolve(__dirname, '../public')));

app.listen(port, () => {
  console.log(`listening to port ${port}...`);
});
