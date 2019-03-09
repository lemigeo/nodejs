const Express = require("express");
const Parser = require('body-parser');

const app = Express();
app.use(Parser.json());
app.use(Parser.urlencoded({ extended: true }));

const server = app.listen(9091, function () {
    console.log('api server running');
});