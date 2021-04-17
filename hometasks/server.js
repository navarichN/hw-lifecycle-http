const Koa = require("koa");
const BodyParser = require("koa-bodyparser");
const Router = require("koa-router");
const Logger = require("koa-logger");
const cors = require('koa-cors');
const serve = require("koa-static");
const mount = require("koa-mount");
const HttpStatus = require("http-status");

const app = new Koa();

const PORT = process.env.PORT || 7070;

app.use(BodyParser());
app.use(Logger());
app.use(cors());

const router = new Router();

router.get("/",async (ctx,next)=>{
  const notes = [{
    "id": 0,
    "content": "То, что было введно в поле ввода"
  }];
  console.log('ctx',ctx,'next', next)
  ctx.status = HttpStatus.OK;
  ctx.body = notes;
  await next();
})
.post('/', (ctx, next) => {
  ctx.body = ctx.request.body;
  console.log(ctx.body)
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});

