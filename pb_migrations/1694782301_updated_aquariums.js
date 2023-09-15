/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvub83znzpfog23")

  // remove
  collection.schema.removeField("dhjgm9ej")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvub83znzpfog23")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dhjgm9ej",
    "name": "plants",
    "type": "relation",
    "required": false,
    "unique": false,
    "options": {
      "collectionId": "vjcj2n38sc5htw3",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": []
    }
  }))

  return dao.saveCollection(collection)
})
