import { model, Schema } from 'mongoose';

const DriverSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  driving: {
    type: Boolean,
    default: false
  }
});

const Driver = model('driver', DriverSchema);

export default Driver;
