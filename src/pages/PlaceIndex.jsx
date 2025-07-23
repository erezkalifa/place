import { useEffect, useMemo, useState } from "react";
import { placeService } from "../services/place.service.js";
import { PlaceList } from "../cmps/PlaceList.jsx";
import { PlaceFilter } from "../cmps/PlaceFilter.jsx";
import { MapView } from "../cmps/MapView.jsx";

export function PlaceIndex() {
  const [places, setPlaces] = useState([]);
  const [filterBy, setFilterBy] = useState({ type: "" });
  const [isLoading, setIsLoading] = useState(true);

  const mapCenter = useMemo(() => ({ lat: 31.7683, lng: 35.2137 }), []);
  const mapZoom = 12;

  useEffect(() => {
    loadPlaces();
  }, [filterBy]);

  async function loadPlaces() {
    try {
      setIsLoading(true);
      const data = await placeService.query(filterBy);
      setPlaces(data);
    } catch (err) {
      console.log("Cannot get places:", err);
    } finally {
      setIsLoading(false);
    }
  }

  function onSetFilter(partial) {
    setFilterBy((prev) => ({ ...prev, ...partial }));
  }

  return (
    <section className="place-index">
      <MapView center={mapCenter} zoom={mapZoom} />

      <PlaceFilter filterBy={filterBy} onSetFilter={onSetFilter} />

      {isLoading ? (
        <p>Loading places...</p>
      ) : !places.length ? (
        <p>No places to show</p>
      ) : (
        <PlaceList places={places} />
      )}
    </section>
  );
}
