const http = require('http');
const app = require("./app.js");

const server = http.createServer(app);

const PORT  = process.env.PORT || 3000;

app.listen(PORT,()=>{
  console.log('server starter at port: '+PORT)
});
