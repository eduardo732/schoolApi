class BaseService {
  constructor({ EntityBusiness }) {
    this.__entityBusiness = EntityBusiness;
  }

  async getAll() {
    const entities = await this._entityBusiness.getAll();
    return entities;
  }

  async get(id) {
    const entity = await this._entityBusiness.get(id);
    return entity;
  }

  async create(entity) {
    const createdEntity = await this._entityBusiness.create(entity);
    return createdEntity;
  }

  async update(id, entity) {
    const updatedEntity = await this._entityBusiness.update(id, entity);
    return updatedEntity;
  }

  async delete(id) {
    return this._entityBusiness.delete(id);
  }
}

module.exports = BaseService;
