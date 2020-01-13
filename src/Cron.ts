import { ActivityController } from "./controllers/activity.controller";
const cron = require('cron');

export class Cron {
  constructor(
    protected activityController: ActivityController,
  ) {
  }

  async start() {
    this.midnight();
  }

  private async midnight() {
    console.log('Start Cron Jobs');

    cron.schedule("00 00 00 * * *", async () => {
      await this.activityController.finalizarActivities();
      console.log('Se ejecuto el cambio de estado a actividades finalizadas.');
    });
  }
}
