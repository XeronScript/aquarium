/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50ient7gnfhx1vn")

  // remove
  collection.schema.removeField("atttba4q")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("50ient7gnfhx1vn")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "atttba4q",
    "name": "price",
    "type": "number",
    "required": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null
    }
  }))

  return dao.saveCollection(collection)
})
