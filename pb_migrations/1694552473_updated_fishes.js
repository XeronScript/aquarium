/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obfckt353zut2lh")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n8ygobgy",
    "name": "image",
    "type": "file",
    "required": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("obfckt353zut2lh")

  // remove
  collection.schema.removeField("n8ygobgy")

  return dao.saveCollection(collection)
})
