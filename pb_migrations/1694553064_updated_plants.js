/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjcj2n38sc5htw3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dgvt3ts2",
    "name": "name",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vjcj2n38sc5htw3")

  // remove
  collection.schema.removeField("dgvt3ts2")

  return dao.saveCollection(collection)
})
