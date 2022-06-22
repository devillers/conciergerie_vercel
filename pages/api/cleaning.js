import Cleaning from '../../models/Cleaning';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await Cleaning.deleteMany();
  await Cleaning.insertMany(data.cleaning);
  await db.disconnect();
  res.send({ message: 'Cleaning seeded successfully' });
};

export default handler;
