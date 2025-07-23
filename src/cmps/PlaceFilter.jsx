// src/cmps/PlaceFilter.jsx
export function PlaceFilter({ filterBy, onSetFilter }) {
  function handleChange(ev) {
    const { name, value } = ev.target;
    onSetFilter({ [name]: value });
  }

  return (
    <section className="place-filter">
      <input
        type="text"
        name="type"
        placeholder="Filter by type..."
        value={filterBy.type || ""}
        onChange={handleChange}
      />
    </section>
  );
}
