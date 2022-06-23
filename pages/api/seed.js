import Product from '../../models/Product';
import Check_In from '../../models/Check_In';
import Check_Out from '../../models/Check_Out';
import Cleaning from '../../models/Cleaning';
import Chalet from '../../models/Chalet';
import data from '../../utils/data';
import db from '../../utils/db';

const handler = async (req, res) => {
  await db.connect();
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await Cleaning.deleteMany();
  await Cleaning.insertMany(data.cleaning);
  await Check_In.deleteMany();
  await Check_In.insertMany(data.check_In);
  await Check_Out.deleteMany();
  await Check_Out.insertMany(data.check_Out);
  await Chalet.deleteMany();
  await Chalet.insertMany(data.chalets);
  await db.disconnect();
  res.send({ message: 'all good :)' });
};

export default handler;
