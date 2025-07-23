import { Routes, Route, Navigate } from "react-router-dom";
import { NotFound } from "./pages/NotFound.jsx";
import { PlaceCreate } from "./pages/PlaceCreate.jsx";
import { PlaceIndex } from "./pages/PlaceIndex.jsx";

export default function App() {
  return (
    <main className="app">
      <Routes>
        <Route path="/" element={<Navigate to="/home" replace />} />
        <Route path="/home" element={<PlaceCreate />} />
        <Route path="/api/place" element={<PlaceIndex />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </main>
  );
}
