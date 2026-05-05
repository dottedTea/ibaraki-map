"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import data from "$/data.json";

export const IbarakiMap = () => {
  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? ""}>
      {data.map(({ videoId, position }) => (
        <Map
          key={videoId}
          defaultCenter={position}
          defaultZoom={10}
          disableDefaultUI
        >
          <Marker position={position} />
        </Map>
      ))}
    </APIProvider>
  );
};
