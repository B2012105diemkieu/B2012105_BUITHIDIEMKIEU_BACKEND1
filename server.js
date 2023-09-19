const app = require("./app");
const config = require("./app/config");

//const http = require("http");
//const server = http.createServer(app);

//start server
const PORT = config.app.port;
//server.listen(PORT, () => {
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);

});

