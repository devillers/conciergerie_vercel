import mongoose from 'mongoose';

const Check_InSchema = new mongoose.Schema({
  title_one: { type: String, required: true },
  description_one: { type: String, required: true },
  title_two: { type: String, required: true },
  description_two: { type: String, required: true },
  title_three: { type: String, required: true },
  description_three: { type: String, required: true },
});

const checkout =
  mongoose.models.Check_In || mongoose.model('Check_In', Check_InSchema);
export default checkout;
