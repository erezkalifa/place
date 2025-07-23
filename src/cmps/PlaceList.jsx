export function PlaceList({ places }) {
  if (!places?.length) return <p>No places to show</p>;

  return (
    <div className="table-wrapper">
      <table className="place-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Type</th>
            <th>Address</th>
            {/* <th>Actions</th> אם צריך */}
          </tr>
        </thead>
        <tbody>
          {places.map((place, idx) => (
            <tr key={place.id ?? idx}>
              <td>{place.name}</td>
              <td>{place.type}</td>
              <td>{place.address}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
