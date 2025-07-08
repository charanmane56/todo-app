const connectMongodb = async() => {
const mongoose = require('mongoose');    

try{
    await mongoose.connect(process.env.CONNECTION_URL);
    console.log('Connected to MongoDB successfully');
}catch(error){
    console.log(error.message);
    process.exit(1); // Exit process with failure
}
}

module.exports = connectMongodb;