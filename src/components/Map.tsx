"use client";

import { APIProvider, Map, Marker } from "@vis.gl/react-google-maps";
import { useState } from "react";
import { MapDetailModal } from "@/components/MapDetailModal";
import type { Spot } from "@/types/spot";
import datas from "$/data.json";

export const MapRoot = () => {
  const [openModalData, setOpenModalData] = useState<Spot>();

  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? ""}>
        <Map
          defaultCenter={{ lat: 36.37091659865136, lng: 140.47630417531485 }}
          defaultZoom={10}
          disableDefaultUI
        >
          {datas.map((data) => (
            <div key={data.name}>
              <Marker
                position={data.position}
                onClick={() => {
                  setOpenModalData(data);
                }}
              />
            </div>
          ))}
        </Map>
      </APIProvider>

      <MapDetailModal
        open={openModalData !== undefined}
        onOpenChange={(open) => {
          if (!open) {
            setOpenModalData(undefined);
          }
        }}
        {...openModalData}
      />
    </>
  );
};
