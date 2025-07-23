import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { PlaceService } from "../services/Place.service";

export function PlaceEdit() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [Place, setPlace] = useState({ txt: "", isDone: false });

  useEffect(() => {
    if (!id) return;
    loadPlace();
  }, [id]);

  async function loadPlace() {
    const t = await PlaceService.getById(+id);
    if (!t) return navigate("/Places");
    setPlace(t);
  }

  function onChange(ev) {
    const { name, type, checked, value } = ev.target;
    setPlace((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  }

  async function onSave(ev) {
    ev.preventDefault();
    await PlaceService.save(Place);
    navigate("/Places");
  }

  return (
    <section className="Place-edit-page">
      <h2>{id ? "עריכת משימה" : "יצירת משימה"}</h2>
      <form onSubmit={onSave}>
        <input
          name="txt"
          value={Place.txt}
          onChange={onChange}
          placeholder="תיאור המשימה"
          autoFocus
        />
        <label>
          <input
            type="checkbox"
            name="isDone"
            checked={Place.isDone}
            onChange={onChange}
          />{" "}
          בוצעה
        </label>

        <button>שמור</button>
        <button type="button" onClick={() => navigate(-1)}>
          בטל
        </button>
      </form>
    </section>
  );
}
