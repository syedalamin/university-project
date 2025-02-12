import app from './app';
import config from './app/config';
import mongoose from 'mongoose';

async function main() {
  try {
    // mongodb connection
    await mongoose.connect(config.database_url as string);
    // app listen
    app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('🚀 ~ main ~ err:', err);
  }
}

main();
