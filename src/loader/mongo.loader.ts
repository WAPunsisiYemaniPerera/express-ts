import mongoose from "mongoose";
import { APP_CONFIG } from "../config/app.config";

export class MongoLoader{
    private MONGODB_URL:string = APP_CONFIG.MONGODB_URL || '';

    public async connect(){
        try{
            await mongoose.connect(this.MONGODB_URL);
            console.log('Connected to MongoDB');
        }catch(error){
            console.error('Error connecting to MongoDB',error);
        }
    }
}