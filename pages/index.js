import Layout from '../components/Layout';
import CleaningCard from '../components/CleaningCard';
import CheckInCard from '../components/CheckInCard';
import db from '../utils/db';
import Cleaning from '../models/Cleaning';
import Check_In from '../models/Check_In';
import Check_Out from '../models/Check_Out';

const Home = ({ cleanings, check_In_data, check_Out_data }) => (
  <>
    <Layout title="Accueil">
      <div>
        {cleanings.map((cleaning) => (
          <CleaningCard cleaning={cleaning} key={cleaning._id} />
        ))}
      </div>
      <div>
        {check_In_data.map((check_in_data_item) => (
          <CheckInCard
            check_in_data_item={check_in_data_item}
            key={check_in_data_item._id}
          />
        ))}
      </div>
      <div>
        {check_Out_data.map((check_out_data_item) => (
          <CheckInCard
            check_in_data_item={check_out_data_item}
            key={check_out_data_item._id}
          />
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
  const res_1 = await Check_In.find({});
  const check_In_data = res_1.map((doc) => {
    return doc.toObject({
      transform: (doc, ret) => {
        ret._id = doc._id.toString();
      },
    });
  });
  const res_3 = await Check_Out.find({});
  const check_Out_data = res_3.map((doc) => {
    return doc.toObject({
      transform: (doc, ret) => {
        ret._id = doc._id.toString();
      },
    });
  });
  return {
    props: {
      cleanings,
      check_In_data,
      check_Out_data,
    },
  };
}

export default Home;
