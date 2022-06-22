import Layout from '../components/Layout';
import CleaningCard from '../components/CleaningCard';
import db from '../utils/db';
import Cleaning from '../models/Cleaning';

const Home = ({ cleanings }) => (
  <>
    <Layout title="Accueil">
      <div>
        {cleanings.map((cleaning) => (
          <CleaningCard cleaning={cleaning} key={cleaning._id} />
        ))}
      </div>
    </Layout>
  </>
);
export async function getStaticProps() {
  await db.connect();

  const res = await Cleaning.find({});
  const cleanings = res.map((doc) => {
    return doc.toObject({
      transform: (doc, ret) => {
        ret._id = doc._id.toString();
      },
    });
  });
  return {
    props: {
      cleanings,
    },
  };
}

export default Home;
