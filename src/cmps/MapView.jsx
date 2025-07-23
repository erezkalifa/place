import { memo } from "react";
import { Map } from "@vis.gl/react-google-maps";

function _MapView({
  center = { lat: 31.7683, lng: 35.2137 },
  zoom = 12,
  style = { width: "100%", height: "400px", borderRadius: "6px" },
}) {
  return (
    <Map
      defaultCenter={center}
      defaultZoom={zoom}
      style={style}
      onCameraChanged={(ev) => {
        console.log(
          "camera changed:",
          ev.detail.center,
          "zoom:",
          ev.detail.zoom
        );
      }}
    />
  );
}

export const MapView = memo(_MapView);
