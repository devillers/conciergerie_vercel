import mongoose from 'mongoose';

const cleaningSchema = new mongoose.Schema({
  mainTitle: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  secondTitle: { type: String, required: true },
  prestataires: { type: String, required: true },
  qualityTitle: { type: String, required: true },
  qualityContent: { type: String },
  consommableTitle: { type: String },
  consommableContent: { type: String },
  cleaningFeesTitle: { type: String },
  cleaningFeesContent: { type: String },
});

const cleaning =
  mongoose.models.Cleaning || mongoose.model('Cleaning', cleaningSchema);
export default cleaning;
