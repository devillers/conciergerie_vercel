import Layout from '../../components/Layout';
import ProductItem from '../../components/ProductItem';
import Product from '../../models/Product';
import db from '../../utils/db';

const Home = ({ products }) => {
  return (
    <Layout title="location linge">
      <div className="rounded-md shadow-md text-xs text-slate-900 font-poppin p-5">
        <h1 className="">Location de linge de Maison </h1>
        <div className="grid grid-cols-5 ">
          <div className="col-span-3">
            <div className="grid grid-cols-3 gap-3">
              {products.map((product) => (
                <ProductItem product={product} key={product._id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export async function getStaticProps() {
  await db.connect();

  const res = await Product.find({});
  const products = res.map((doc) => {
    return doc.toObject({
      tranform: (doc, ret) => {
        ret._id = doc._id.toString();
      },
    });
  });
  return {
    props: {
      products,
    },
  };
}

export default Home;
