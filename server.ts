import * as express from 'express';
import { connectDB } from './src/config/db';
import { envVariable } from './src/config/configuration';
import { authRouter, callingRouter } from './src/routes/api';


const app = express()
// Connect DataBase
connectDB();
const PORT = envVariable.port

app.use(express.json());
app.get('/', (req, res) => res.send('API running'))

// Define Routes
app.use('/api/auth', authRouter)
app.use('/api/call', callingRouter)


app.listen(PORT, () => console.log('Server started on PORT:', PORT))
