//import { WifiIcon } from '@heroicons/react/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBath,
  faShower,
  faPerson,
  faWifi,
} from '@fortawesome/free-solid-svg-icons';

import Image from 'next/image';
import Link from 'next/link';

export default function ChaletItem({ chalet }) {
  return (
    <>
      <Link href={`/hebergement/${chalet.slug}`} key={chalet.slug}>
        <div className="card w-full font-poppin">
          <div className="relative h-56 ">
            <Image
              src={chalet.image_1}
              alt={chalet.name}
              layout="fill"
              objectFit="cover"
              className=" rounded-t "
              priority
            />
          </div>
          <ul className="pb-4 ">
            <li>
              <h2 className="text-md pt-2 font-bold">{chalet.nameShort} </h2>
            </li>
            <li>
              <p className="text-xs pb-3">{chalet.village} </p>

              <div className="flex text-slate-600">
                <div className="mr-1">
                  {chalet.wifi ? (
                    <FontAwesomeIcon className="icon" icon={faWifi} />
                  ) : (
                    ''
                  )}
                </div>

                <div className=" relative">
                  {chalet.bathTube ? (
                    <FontAwesomeIcon className="icon" icon={faBath} />
                  ) : (
                    ''
                  )}
                  <div className="rond">{chalet.bathTube}</div>
                </div>

                <div className=" relative">
                  {chalet.shower ? (
                    <FontAwesomeIcon className="icon" icon={faShower} />
                  ) : (
                    ''
                  )}
                  <div className="rond">{chalet.shower}</div>
                </div>

                <div className=" relative">
                  {chalet.capacity ? (
                    <FontAwesomeIcon className="icon" icon={faPerson} />
                  ) : (
                    ''
                  )}
                  <div className="rond">{chalet.capacity}</div>
                </div>
                <div className="relative">
                  <p className="ml-2 text-xs">
                    {chalet.surface}
                    <span className="ml-1 text-xs">m2</span>
                  </p>
                </div>

                {/* <div className="relative">
                  <p className="ml-2 text-xs">
                    {chalet.price} €<span className="ml-1 text-xs">/nuit</span>
                  </p>
                </div> */}
              </div>
            </li>
          </ul>
        </div>
      </Link>
    </>
  );
}
