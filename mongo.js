const mongoose = require('mongoose');

async function connect() {
  try {
    mongoose.set('useCreateIndex', true);
    // mongoose.set('debug', true);
    const test = await mongoose.connect(process.env.MONGO_URL,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
      });
    if (test) {
      const data = {
        message: 'Connected to MongoDB',
      };
      console.log(data)
      
    }
  } catch (err) {
    const data = {
      message: `Can't connect to the MongoDB ${err}`,
    };
    console.log(data)
  }
}

connect()