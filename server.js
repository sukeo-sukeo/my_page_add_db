const express = require('express');
const port = process.env.PORT || 8080;
const app = express();
app.use(express.static(__dirname + "/docs/"));
// app.use(express.static(__dirname + "/docs/my_page/"));
app.listen(port);
