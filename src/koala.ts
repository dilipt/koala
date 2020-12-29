import Koa from 'koa';
import Router from 'koa-router';

type KoalaApp = {
  start: () => void,
}

type KoalaParams = {
  port: number,
  healthRouter: Router,
  helloRouter: Router,
};

export function Koala({port, healthRouter, helloRouter}: KoalaParams): KoalaApp {
  const app = new Koa();

  app.use(healthRouter.routes());

  app.use(helloRouter.routes());

  function start() {
    app.listen(port, () => {
      console.log(`app started on ${port}`);
      app.on('SIGINT', () => {
        console.log('SIGINT received, shutting down.');
        process.exit();
      })
    });
  }

  return {
    start,
  }
}