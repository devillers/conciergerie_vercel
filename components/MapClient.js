import React from 'react';
import ReactMapGL from 'react-map-gl';
import { useState } from 'react';

import db from '../utils/db';
import Chalet from '../models/Chalet';

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

function Map({ chalet }) {
  const [viewport, setViewport] = useState({
    width: '100%',
    height: '100%',
    latitude: chalet.long,
    longitude: chalet.lat,
    zoom: 8,
  });

  return (
    <ReactMapGL
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
      mapStyle="mapbox://styles/davidevillers/cl4wpj4ki000b14od72sqo7pc"
      mapboxAccessToken={process.env.mapbox_key}
    />
  );
}

export default Map;
