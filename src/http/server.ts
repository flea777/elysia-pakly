import 'dotenv/config'
import { Elysia } from 'elysia'
import chalk from 'chalk'
import { receiverRoute } from './routes/register-new-receiver';
import { condominiumsRoute } from './routes/condominiums-registers'

const app = new Elysia()
  .use(receiverRoute)
  .use(condominiumsRoute)
  app.listen(3000, () => {
    console.log(chalk.magentaBright('HTTP server running on port 3000'));
});
