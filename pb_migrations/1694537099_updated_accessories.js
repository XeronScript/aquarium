/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50ient7gnfhx1vn")

  // remove
  collection.schema.removeField("i5gg9xgc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kcelggng",
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
  const collection = dao.findCollectionByNameOrId("50ient7gnfhx1vn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "i5gg9xgc",
    "name": "image",
    "type": "text",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  // remove
  collection.schema.removeField("kcelggng")

  return dao.saveCollection(collection)
})
