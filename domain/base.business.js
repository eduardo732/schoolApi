const mapper = require("automapper-js");

class BaseBusiness {
  constructor(EntityRepository, entityToMap) {
    this._entityRepository = EntityRepository;
    this._entityToMap = entityToMap;
  }

  async getAll() {
    const entities = await this_entityRepository.getAll();
    return entities.map(entity => mapper(this._entityToMap, entity.toJSON()));
  }

  async get(id) {
      const entity = await this_entityRepository.get(id);
      return mapper(this._entityToMap, entity.toJSON());
  }

  async create(entity) {
    entity = mapper(this._entityToMap, entity);
    const createdEntity = await this_entityRepository.create(entity);
    return mapper(this._entityToMap, createdEntity.toJSON());
  }

  async update(id, entity) {
      entity.id = id;
      entity = mapper(this.entityToMap, entity);
      const updatedEntity = await this_entityRepository.updateEntity(id, entity);
      return mapper(this.entityToMap, updatedentity);
  }

  async delete(id){
      return await this_entityRepository.delete(id);
  }
}

module.exports = BaseBusiness;
