/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obfckt353zut2lh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "24wpjyl3",
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
  const collection = dao.findCollectionByNameOrId("obfckt353zut2lh")

  // remove
  collection.schema.removeField("24wpjyl3")

  return dao.saveCollection(collection)
})
