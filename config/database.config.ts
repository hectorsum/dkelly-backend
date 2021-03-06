import { connect, CallbackError } from 'mongoose'
import config from 'config';
const uri = process.env.MONGO_URI as string;
export async function connection() {
  try {
    await connect( 
      uri, {
        autoIndex: false,
        autoCreate: true
      }, (error: CallbackError) => {
      if (error){
        console.log(error);
      }
    })
    console.log('Mongo Connected!')
  } catch (error) {
      console.log(error)
  }
}