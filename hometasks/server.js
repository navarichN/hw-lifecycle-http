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

let notes = [];

router.get("/notes",async (ctx,next)=>{
  ctx.status = HttpStatus.OK;
  ctx.body = notes;
  await next();
})
.post('/notes',async (ctx, next) => {
  ctx.body = ctx.request.body;
  notes.push(ctx.body)
  await next();
})
.delete('/notes/:id', async (req, next) => {
  req.body = notes;
  notes = notes.filter((el) => el.id !== Number(req.params.id))
})

app.use(router.routes()).use(router.allowedMethods());

app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/", PORT, PORT);
});

