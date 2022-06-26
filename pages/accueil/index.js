import React from 'react';
//import Layout_accueil from '../../components/Layout';
import Link from 'next/link';

const accueil = () => {
  return (
    <>
      <div className="w-full h-screen flex flex-col items-center justify-center font-poppin bg-[url('/images/background/pexels-chris-9407829.jpg')] bg-cover">
        <h1 className="text-3xl lg:text-4xl">conciergerie saint gervais</h1>
        <div className="w-full grid grid-cols-3 gap-1 mt-20 p-3">
          <Link href={'hebergement'}>
            <div className="h-20 w-full bg-amber-200 mix-blend-multiply "></div>
          </Link>

          <div className="h-20 w-full bg-amber-300 mix-blend-multiply"></div>
          <div className="h-20 w-full bg-amber-400 mix-blend-multiply"></div>
        </div>
      </div>
    </>
  );
};

export default accueil;
