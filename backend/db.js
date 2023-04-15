const mongoose = require('mongoose');


var mongoURL = 'mongodb+srv://ashitatiwari:lostbutwon@cluster0.stcqu0z.mongodb.net/edibles';
mongoose.connect(mongoURL, { useUnifiedTopology: true, useNewUrlParser: true });

var db = mongoose.connection;

db.on('connected', () => {
  console.log('MongoDB Connection Successfully');
});

db.on('error', () => {
  console.log('MongoDB Connection Failed');
});

module.exports = mongoose