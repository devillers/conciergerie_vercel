import mongoose from 'mongoose';

const chaletSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  quartier: { type: String },
  nameShort: { type: String, required: true },
  slug: { type: String, required: true },
  category: { type: String, required: true },
  village: { type: String, required: true },
  image_1: { type: String, required: true },
  image_2: { type: String, required: true },
  image_3: { type: String, required: true },
  image_4: { type: String, required: true },
  image_5: { type: String, required: true },
  airbnb: { type: String, required: true },
  booking: { type: String },
  private: { type: String },
  bedrooms: { type: String, required: true },
  capacity: { type: Number, required: true },
  sauna: { type: String },
  jacussy: { type: String },
  hammam: { type: String },
  firePlace: { type: String },
  carPark: { type: String },
  busTopName: { type: String },
  kitchenSize: { type: String },
  sdb: { type: Number, required: true },
  bathTube: { type: Number },
  shower: { type: Number },
  dryer: { type: String },
  whashingMachine: { type: String },
  dishWasher: { type: String },
  tvscreen: { type: String },
  singleBed: { type: String },
  doubleBed: { type: String },
  bedBunk: { type: String },
  party: { type: String },
  conciergerie: { type: String },
  foldingBed: { type: String },
  highChair: { type: String },
  vueOn: { type: String },
  wifi: { type: String },
  price: {type: Number},
  surface: { type: Number },
  adresse: { type: String, required: true },
  lat: {type: Number, required: true},
  long: {type: Number, required: true},
});

const Chalet = mongoose.models.Chalet || mongoose.model('Chalet', chaletSchema);
export default Chalet;
