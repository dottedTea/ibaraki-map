"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { DetailModal } from "@/components/DetailModal";
import datas from "$/data.json";

export const IbarakiMap = () => {
  const [isDetailModalOpen, setIsDetailModalOpen] = useState<boolean>(false);

  return (
    <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? ""}>
      <Map
        defaultCenter={{ lat: 36.37091659865136, lng: 140.47630417531485 }}
        defaultZoom={10}
        disableDefaultUI
      >
        {datas.map((data) => (
          <div key={data.videoId}>
            <Marker
              position={data.position}
              onClick={() => {
                setIsDetailModalOpen(true);
              }}
            />
            <DetailModal
              open={isDetailModalOpen}
              onOpenChange={setIsDetailModalOpen}
              {...data}
            />
          </div>
        ))}
      </Map>
    </APIProvider>
  );
};
