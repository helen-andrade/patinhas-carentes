import 'dotenv/config'
import "reflect-metadata";
import { makeDBConnection } from '@drivers/typeorm/mySQL';
import { app } from '@drivers/express/app';

makeDBConnection();

const port = process.env.SERVER_PORT;
app.listen(port, () => console.log('listening on port ' + port));
