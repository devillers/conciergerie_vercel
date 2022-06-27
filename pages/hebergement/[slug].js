import Layout from '../../components/Layout';
import db from '../../utils/db';
import Chalet from '../../models/Chalet';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Image from 'next/image';
import Map from '../../components/MapClient';
import {
  faBath,
  faBed,
  faBellConcierge,
  faBinoculars,
  faBus,
  faChampagneGlasses,
  faChild,
  faChildReaching,
  faEarthAsia,
  faFire,
  faHotTub,
  faKitchenSet,
  faParking,
  faShirt,
  faShower,
  faTv,
  faWifi,
  faWineGlass,
} from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export const getStaticPaths = async () => {
  await db.connect();
  const chalets = await Chalet.find({});
  const paths = chalets.map((chalet) => {
    return {
      params: { slug: chalet.slug },
    };
  });
  return {
    paths: paths,
    fallback: false,
  };
};

export async function getStaticProps(context) {
  await db.connect();
  const slug = context.params.slug;
  const chalet = await Chalet.findOne({ slug });
  return {
    props: {
      chalet: chalet.toObject({
        transform: (doc, ret) => {
          ret._id = doc._id.toString();
        },
      }),
    },
  };
}

const HebergementScreen = ({ chalet }) => {
  return (
    <>
      <Layout title="hebergement">
        <h1 className=" text-3xl p-4 font-poppin ">{chalet.name} </h1>
        <div className="grid overflow-hidden gap-1 md:grid-cols-2 grid-rows-2 grid-flow-row lg:grid-cols-4">
          <div className="relative box row-span-2 col-span-2 h-96  ">
            <Image
              src={chalet.image_1}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=" lg:rounded-tl-md rounded-bl-md"
              priority
            />
          </div>
          <div className="relative box col-span-1 sm:h-24  md:h-36 lg:h-auto ">
            {' '}
            <Image
              src={chalet.image_2}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=""
              priority
            />
          </div>
          <div className="relative box col-span-1 ">
            {' '}
            <Image
              src={chalet.image_3}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=" rounded-tr-md"
              priority
            />
          </div>
          <div className="relative box sm:h-24 md:h-36 lg:h-auto">
            {' '}
            <Image
              src={chalet.image_4}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=""
              priority
            />
          </div>
          <div className="relative box ">
            {' '}
            <Image
              src={chalet.image_5}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className="rounded-br-md"
              priority
            />
          </div>
        </div>
        <div className="grid overflow-hidden md:grid-cols-4 grid-rows-2 gap-2 grid-flow-row h-auto font-poppin ">
          <div className="row-span-2 col-span-2 text-sm p-4 ">
            <h3 className=" text-2xl mt-5 ">Description</h3>
            <p className="mt-5 leading-6 text-justify  >">
              {chalet.description}
            </p>
            <div className="h-48 mt-5">
              <Map chalet={chalet} />
            </div>
          </div>

          {/* partie 2 */}
          <div className="col-span-1 mt-5 mb-10 p-4 text-xs ">
            <h3 className="mb-5 text-2xl font-poppin ">Amenities</h3>
            <ul>
              <li className="flex items-center mb-2">
                {chalet.wifi ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faWifi} />
                    <span>{chalet.wifi} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.vueOn ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBinoculars} />
                    <span>{chalet.vueOn} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.conciergerie ? (
                  <div className="flex items-center ">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBellConcierge} />
                    <span>{chalet.conciergerie} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.bedrooms ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBed} />
                    <span>{chalet.bedrooms} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-1">
                {chalet.sauna ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faHotTub} />
                    <span>{chalet.sauna} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.firePlace ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faFire} />
                    <span>{chalet.firePlace} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.highChair ? (
                  <div className="flex items-center ">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faChild} />
                    <span>{chalet.highChair} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.foldingBed ? (
                  <div className="flex items-center ">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faChildReaching} />
                    <span>{chalet.foldingBed} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>

          {/* partie  */}
          <div className="col-span-1 mt-20 mb-10 p-4 text-xs">
            <ul>
              <li className="flex items-center mb-2">
                {chalet.carPark ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faParking} />
                    <span>{chalet.carPark} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.busTopName ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBus} />
                    <span>{chalet.busTopName} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.kitchenSize ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faKitchenSet} />
                    <span>{chalet.kitchenSize} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.bathtube ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faBath} />
                    <span>{chalet.bathtube} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.shower ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faShower} />
                    <span>{chalet.shower} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>

          {/* partie 4 */}
          <div className="col-span-2 p-4 text-xs md:col-span-1">
            <ul>
              <li className="flex items-center mb-2">
                {chalet.stowart ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faHotTub} />
                    <span>{chalet.stowart} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.dryer ? (
                  <div className="flex items-center">
                    <FontAwesomeIcon className="icon" icon={faShirt} />
                    <span>{chalet.dryer} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.whashingMachine ? (
                  <div className="flex items-center">
                    <FontAwesomeIcon className="icon" icon={faEarthAsia} />
                    <span>{chalet.whashingMachine} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.dishwasher ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faWineGlass} />
                    <span>{chalet.dishwasher} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.tvscreen ? (
                  <div className="flex items-center">
                    {' '}
                    <FontAwesomeIcon className="icon" icon={faTv} />
                    <span>{chalet.tvscreen} </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
              <li className="flex items-center mb-2">
                {chalet.party ? (
                  <div className="flex items-center ">
                    {' '}
                    <FontAwesomeIcon
                      className="icon"
                      icon={faChampagneGlasses}
                    />
                    <span className="text-red-600 font-bold">
                      {chalet.party}{' '}
                    </span>
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>

          {/* partie 5 */}

          <div className="col-span-2 w-full p-4 text-xs font-comfortaa md:col-auto">
            <ul>
              <li className="flex items-center mb-2">
                {chalet.airbnb ? (
                  <div className="w-full px-3 py-2 text-center uppercase leading-2 tracking-wide bg-cyan-500 shadow-xl shadow-cyan-500/20 text-white rounded-full">
                    <Link href={chalet.booking}>
                      <a target="_blank">réserver sur Booking</a>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2">
                {chalet.airbnb ? (
                  <div className="w-full px-3 py-2 text-center uppercase leading-2 tracking-wide bg-pink-500 shadow-xl shadow-pink-500/20 text-white rounded-full">
                    <Link href={chalet.airbnb}>
                      <a target="_blank">réserver sur Airbnb</a>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </li>

              <li className="flex items-center mb-2 ">
                {chalet.airbnb ? (
                  <div className="w-full px-3 py-2 text-center uppercase leading-2 tracking-wide bg-sky-500 shadow-xl shadow-sky-500/20 text-white rounded-full">
                    <Link href={chalet.private}>
                      <a target="_blank">direct propriétaire</a>
                    </Link>
                  </div>
                ) : (
                  ''
                )}
              </li>
            </ul>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default HebergementScreen;
