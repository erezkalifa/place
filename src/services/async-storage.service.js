export const storageService = {
  query,
  get,
  post,
  put,
  remove,
};

async function query(entityType, delay = 500) {
  const entities = _load(entityType);
  await _delay(delay);
  return entities;
}

async function get(entityType, entityId, delay = 0) {
  const entities = await query(entityType, delay);
  const entity = entities.find((ent) => ent.id === entityId);
  if (!entity)
    throw new Error(
      `Get failed, cannot find entity with id: ${entityId} in: ${entityType}`
    );
  return entity;
}

async function post(entityType, newEntity, delay = 1) {
  const entities = await query(entityType, delay);
  const entityToSave = { ...newEntity, id: _makeId() };
  entities.push(entityToSave);
  _save(entityType, entities);
  return entityToSave;
}

async function put(entityType, updatedEntity, delay = 1) {
  const entities = await query(entityType, delay);
  const idx = entities.findIndex((ent) => ent.id === updatedEntity.id);
  if (idx < 0)
    throw new Error(
      `Update failed, cannot find entity with id: ${updatedEntity.id} in: ${entityType}`
    );
  entities.splice(idx, 1, { ...updatedEntity });
  _save(entityType, entities);
  return updatedEntity;
}

async function remove(entityType, entityId, delay = 0) {
  const entities = await query(entityType, delay);
  const idx = entities.findIndex((ent) => ent.id === entityId);
  if (idx < 0)
    throw new Error(
      `Remove failed, cannot find entity with id: ${entityId} in: ${entityType}`
    );
  entities.splice(idx, 1);
  _save(entityType, entities);
  return true;
}

// ---------- privates ----------
function _load(key) {
  return JSON.parse(localStorage.getItem(key)) || [];
}
function _save(key, val) {
  localStorage.setItem(key, JSON.stringify(val));
}
function _delay(ms) {
  return new Promise((res) => setTimeout(res, ms));
}
function _makeId(length = 8) {
  let txt = "";
  const possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (let i = 0; i < length; i++) {
    txt += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return txt;
}
