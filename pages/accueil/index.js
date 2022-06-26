import React from 'react';
//import Layout_accueil from '../../components/Layout';
import Link from 'next/link';

const accueil = () => {
  return (
    <>
      <div className="bg-cover bg-center aspect-square w-full h-screen flex flex-col items-center justify-center  bg-[url('/images/background/pexels-chris-9407829.jpg')] ">
        <h1 className="font-lobster text-white text-3xl lg:text-4xl">
          conciergerie saint gervais
        </h1>
        <div className="w-full grid grid-cols-3 gap-4 mt-20 p-3">
          <Link href={'hebergement'}>
            <div className=" backdrop-blur h-[200px] w-full bg-lime-400 mix-blend-multiply opacity-20"></div>
          </Link>
          <Link href={'hebergement'}>
            <div className=" backdrop-blur h-[200px] w-full bg-lime-400 mix-blend-multiply opacity-20"></div>
          </Link>
          <Link href={'hebergement'}>
            <div className=" backdrop-blur h-[200px] w-full bg-lime-400 mix-blend-multiply opacity-20"></div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default accueil;
