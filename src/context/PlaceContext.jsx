// import { createContext, useContext, useEffect, useState } from "react";
// import { PlaceService } from "../services/Place.service.js";

// const PlacesContext = createContext(null);

// export function PlacesProvider({ children }) {
//   const [Places, setPlaces] = useState([]);

//   useEffect(() => {
//     loadPlaces();
//   }, []);

//   async function loadPlaces(filter = { status: "all", txt: "" }) {
//     const data = await PlaceService.query(filter);
//     setPlaces(data);
//   }

//   async function addPlace(txt) {
//     const optimistic = { id: "tmp_" + Date.now(), txt, isDone: false };
//     setPlaces((prev) => [optimistic, ...prev]);

//     const saved = await PlaceService.save({ txt, isDone: false }); // בלי id!
//     setPlaces((prev) => prev.map((t) => (t.id === optimistic.id ? saved : t)));
//   }

//   async function removePlace(id) {
//     setPlaces((prev) => prev.filter((t) => t.id !== id));
//     await PlaceService.remove(id);
//   }

//   async function togglePlace(id) {
//     setPlaces((prev) =>
//       prev.map((t) => (t.id === id ? { ...t, isDone: !t.isDone } : t))
//     );
//     await PlaceService.toggle(id);
//   }

//   async function updatePlace(id, newTxt) {
//     setPlaces((prev) =>
//       prev.map((t) => (t.id === id ? { ...t, txt: newTxt } : t))
//     );
//     await PlaceService.save({ id, txt: newTxt });
//   }

//   const value = {
//     Places,
//     loadPlaces,
//     addPlace,
//     removePlace,
//     togglePlace,
//     updatePlace,
//   };
//   return (
//     <PlacesContext.Provider value={value}>{children}</PlacesContext.Provider>
//   );
// }

// export function usePlaces() {
//   const ctx = useContext(PlacesContext);
//   if (!ctx) throw new Error("usePlaces must be used inside PlacesProvider");
//   return ctx;
// }
