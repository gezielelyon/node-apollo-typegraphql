import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/mongotypegraphql', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});
