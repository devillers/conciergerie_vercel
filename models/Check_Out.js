import mongoose from 'mongoose';

const Check_OutSchema = new mongoose.Schema({
  title_one: { type: String, required: true },
  description_one: { type: String, required: true },
  title_two: { type: String, required: true },
  description_two: { type: String, required: true },
  title_three: { type: String, required: true },
  description_three: { type: String, required: true },
});

const checkout =
  mongoose.models.Check_Out || mongoose.model('Check_Out', Check_OutSchema);
export default checkout;
