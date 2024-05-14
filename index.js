const json_server = require("json-server");

const videoServer = json_server.create(); //server creation

const middleware = json_server.defaults(); //create middleware for conversion json-js

const router = json_server.router("db.json"); //to trabfer data comming to server to the db.json

const cors = require("cors"); //cors library to connectivity
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true, //access-control-allow-credentials:true
  optionSuccessStatus: 200,
};
videoServer.use(cors(corsOptions)); //connect server with frontend using cors
//                   |can add url but it only act for that link

videoServer.use(middleware); //automatically convet json-js using defult method in server

videoServer.use(router); //data goes to db and per

//to run server set port dont add front-end port

const PORT = 8000;
videoServer.listen(PORT, () => {
  console.log(`__Video Server Running at - ${PORT}.........`);
}); //to run server
