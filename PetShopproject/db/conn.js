const mongoose = require("mongoose");

const URI = "mongodb+srv://aman123:<aman123>@cluster0.kcxbg.mongodb.net/pet_data?retryWrites=true&w=majority";
const connectDB = async () => {
    await mongoose.connect(URI,
        {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        });
    console.log('db connected')
}
module.exports = connectDB;
