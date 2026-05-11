"use client";

import {
  AdvancedMarker,
  APIProvider,
  Map as MapBase,
  Pin,
} from "@vis.gl/react-google-maps";
import { useState } from "react";
import { MapDetailModal } from "@/components/MapDetailModal";
import { MapFilter } from "@/components/MapFilter";
import { PIN_TYPE, type PinData, type PinType } from "@/types";
import pinData from "$/data.json";

export const Map = () => {
  const [openModalData, setOpenModalData] = useState<PinData>();
  const [filterValues, setFilterValues] = useState<PinType[]>([
    PIN_TYPE.SPOT,
    PIN_TYPE.GOURMET,
    PIN_TYPE.ACTIVITY,
    PIN_TYPE.EVENT,
  ]);

  /** ピンのタイプから背景色を取得 */
  const getBackgroundColor = (type: PinData["type"]) => {
    switch (type) {
      case PIN_TYPE.SPOT:
        return "#879A6B";
      case PIN_TYPE.GOURMET:
        return "#9A6B70";
      case PIN_TYPE.ACTIVITY:
        return "#6B9A96";
      case PIN_TYPE.EVENT:
        return "#7E6B9A";
      default:
        return "#879A6B";
    }
  };

  return (
    <>
      {/* マップ */}
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY ?? ""}>
        <MapBase
          defaultCenter={{ lat: 36.37091659865136, lng: 140.47630417531485 }}
          defaultZoom={10}
          mapId="DEMO_MAP_ID"
          disableDefaultUI
        >
          {pinData.map(
            (data) =>
              filterValues.includes(data.type as PinType) && (
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
              ),
          )}
        </MapBase>
      </APIProvider>

      {/* 絞り込み */}
      <MapFilter<PinType>
        value={filterValues}
        onValueChange={setFilterValues}
      />

      {/* 詳細モーダル */}
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
