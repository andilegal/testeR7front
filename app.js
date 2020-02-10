let app = require("connect")();
let serveStatic = require("serve-static");
// let nodeSass = require("node-sass");

app.use(serveStatic("public"));

console.log(" ➜   Open: http://localhost:7007");
app.listen(7007);
