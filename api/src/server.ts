import 'dotenv/config'
import "reflect-metadata";
import { makeDBConnection } from '@drivers/typeorm/mySQL';
import { app } from '@drivers/express/app';
import runSeeds from '@drivers/typeorm/seeds';

makeDBConnection().then(() => {
  runSeeds();
});

const port = process.env.SERVER_PORT;
app.listen(port, () => console.log('listening on port ' + port));
