/*
 * Copyright (c) QieTv, Inc. 2018
 * @Author: idzeir
 * @Date: 2020-11-10 10:01:24
 * @Last Modified by: idzeir
 * @Last Modified time: 2020-11-10 17:15:58
 */
const Koa = require("koa");
const Next = require("next");
const Router = require("@koa/router");

const app = Next({ dev: process.env.NODE_ENV !== "production" });
const PORT = 8000;

app.prepare().then(() => {
  const server = new Koa();
  const router = new Router();

  router.get("/", async (ctx) => {
    await app.render(ctx.req, ctx.res, "/", ctx.query);
    ctx.respond = false;
  });

  router.all(/.+/, async (ctx) => {
    await app.getRequestHandler()(ctx.req, ctx.res);
    ctx.respond = false;
  });

  server.use(async (ctx, next) => {
    ctx.res.statusCode = 200;
    await next();
  });

  server.use(router.routes());

  server.listen(PORT, () => {
    console.log(`> Ready on http://localhost:${PORT}`);
  });
});
