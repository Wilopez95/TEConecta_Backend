import { TeconectaApplication } from './application';
import { ApplicationConfig } from '@loopback/core';
import { ActivityController } from './controllers';
import { Cron } from './Cron';

export { TeconectaApplication };

export async function main(options: ApplicationConfig = {}) {
  const app = new TeconectaApplication(options);
  await app.boot();
  await app.start();

  const url = app.restServer.url;
  console.log(`Server is running at ${url}`);
  console.log(`Try ${url}/ping`);

  // Instanciate CronController
  const cronController = app.controller(ActivityController);

  // Get Instance
  const cronControllerInstance = await cronController.getValue(app);

  // Inject by constructor
  const cron = new Cron(cronControllerInstance);

  // Invoke method
  cron.start();

  return app;
}
