import { storageService } from "./async-storage.service";

const ENTITY = "PlaceDB";

export const placeService = {
  query,
  getById,
  save,
  remove,
};

async function query(filterBy = {}) {
  return storageService.query(ENTITY).then((places) => {
    if (filterBy.type) {
      const reg = new RegExp(filterBy.type, "i");
      places = places.filter((place) => reg.test(place.type));
    }

    return places;
  });
}

async function getById(id) {
  return storageService.get(ENTITY, id);
}

async function save(Place) {
  if (Place.id) return storageService.put(ENTITY, Place);
  return storageService.post(ENTITY, { ...Place });
}

async function remove(id) {
  return storageService.remove(ENTITY, id);
}
