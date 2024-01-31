import mongoose, { ConnectOptions } from "mongoose"
import getConfig from "../../config";



export function Mongoose() {

    const config = getConfig()


    const mongoURI: string = config.database.url

    const Connections = {
        autoIndex: false,
        connectTimeoutMS: 1000,
    }

    return () => {

        mongoose.connect(mongoURI, Connections as ConnectOptions)
            .then(() => {
                console.log('Connected to MongoDB');
            })
            .catch(error => {
                console.error('Error connecting to MongoDB:', error);
            });

    }


}


