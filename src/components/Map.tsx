"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map as MapBase,
  Pin,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import { MapDetailModal } from "@/components/MapDetailModal";
import type { Spot } from "@/types/spot";
import datas from "$/data.json";

export const Map = () => {
  const [openModalData, setOpenModalData] = useState<Spot>();

  /** ピンのタイプから背景色を取得 */
  const getBackgroundColor = (type: Spot["type"]) => {
    switch (type) {
      case "spot":
        return "#879A6B";
      case "gourmet":
        return "#9A6B70";
      case "souvenir":
        return "#6B9A96";
      case "event":
        return "#7E6B9A";
      default:
        return "#879A6B";
    }
  };

  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? ""}>
        <MapBase
          defaultCenter={{ lat: 36.37091659865136, lng: 140.47630417531485 }}
          defaultZoom={10}
          mapId="DEMO_MAP_ID"
          disableDefaultUI
        >
          {datas.map((data) => (
            <div key={data.name}>
              <AdvancedMarker
                position={data.position}
                onClick={() => setOpenModalData(data)}
              >
                <Pin
                  background={getBackgroundColor(data.type)}
                  borderColor={"#000000"}
                  glyphSrc="/glyph.png"
                />
              </AdvancedMarker>
            </div>
          ))}
        </MapBase>
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
