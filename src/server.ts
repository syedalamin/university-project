import app from './app';
import config from './app/config';
import mongoose from 'mongoose';
import {Server} from 'http'
let server : Server 

async function main() {
  try {
    // mongodb connection
    await mongoose.connect(config.database_url as string);
    // app listen server =
    server = app.listen(config.port, () => {
      console.log(`Example app listening on port ${config.port}`);
    });
  } catch (err) {
    console.log('🚀 ~ main ~ err:', err)
  }
}

main();

process.on('unhandledRejection', () =>{
  
  if(server){
    server.close(() =>{
      process.exit(1)
    })
  }
  process.exit(1)
})

process.on('uncaughtException', () =>{
  process.exit(1)
})

