import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { PlaceService } from "../services/Place.service";

export function PlaceDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Place, setPlace] = useState(null);

  useEffect(() => {
    loadPlace();
  }, [id]);

  async function loadPlace() {
    const t = await PlaceService.getById(+id);
    if (!t) return navigate("/Places");
    setPlace(t);
  }

  if (!Place) return <p>טוען...</p>;

  return (
    <section className="Place-details">
      <h2>פרטי משימה</h2>
      <p>
        <b>ID:</b> {Place.id}
      </p>
      <p>
        <b>טקסט:</b> {Place.txt}
      </p>
      <p>
        <b>בוצעה?</b> {Place.isDone ? "כן" : "לא"}
      </p>

      <button onClick={() => navigate(`/Places/edit/${Place.id}`)}>
        עריכה
      </button>
      <button onClick={() => navigate(-1)}>חזור</button>
    </section>
  );
}
