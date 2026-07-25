import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const PORT = process.env.PORT || 5000;

const startServer = async () => {
  try {
      app.listen(PORT, () => {
      console.log(` Server is listening on port ${PORT}`);
      });
  } catch(error) {
    console.error(`Can't start the server: Status: ${error}`);
    process.exit(1);
  }
}

startServer();
