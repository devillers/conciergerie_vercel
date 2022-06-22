//import Image from 'next/image';
//import Link from 'next/link';

export default function CleaningCard({ cleaning }) {
  return (
    <>
      <section className="font-poppin leading-10 ">
        <div className="mb-4">
          <h1 className="text-2xl mb-4">{cleaning.mainTitle}</h1>
          <h2 className="text-lg mb-3">{cleaning.title}</h2>
          <p className="text-sm text-justify">{cleaning.description}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg mb-3">{cleaning.secondTitle}</h2>
          <p className="text-sm text-justify">{cleaning.prestataires}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg mb-3">{cleaning.qualityTitle}</h2>
          <p className="text-sm text-justify">{cleaning.qualityContent}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg mb-3">{cleaning.consommableTitle}</h2>
          <p className="text-sm text-justify">{cleaning.consommableContent}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-lg mb-3">{cleaning.cleaningFeesTitle}</h2>
          <p className="text-sm text-justify">{cleaning.cleaningFeesContent}</p>
        </div>
      </section>
    </>
  );
}
