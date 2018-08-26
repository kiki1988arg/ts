import * as restify from "restify";

const server:any = restify.createServer();
server.get("/hello/:name", respond);
server.head("/hello/:name", respond);

server.listen(8080, function():void {
  console.log("%s listening at %s", server.name, server.url);
});

function respond(req:any, res:any, next:any):void {
  res.send("hello " + req.params.name);
  next();
}