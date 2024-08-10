import { app } from './app';
import 'dotenv/config'

const port = process.env.SERVER_PORT;
app.listen(port, () => console.log('listening on port ' + port));