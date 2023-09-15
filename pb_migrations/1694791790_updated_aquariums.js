/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("wvub83znzpfog23")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "4tzydsww",
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
  const collection = dao.findCollectionByNameOrId("wvub83znzpfog23")

  // remove
  collection.schema.removeField("4tzydsww")

  return dao.saveCollection(collection)
})
