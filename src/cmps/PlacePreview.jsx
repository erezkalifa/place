export function PlacePreview({ place }) {
  return (
    <tr className="place-preview">
      <td>{place.name}</td>
      <td>{place.type}</td>
      <td>{place.address}</td>
    </tr>
  );
}
